













import './Pieces.css';
import Piece from './Piece';
import React, { useState, useRef } from 'react';
import { copyPosition } from '../../helper';
import { useAppContext } from '../../context/Context';
import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
import SwapButton from '../../swapPiece';

export default function Pieces() {
    const ref = useRef();
    const { appState, dispatch } = useAppContext();
    const currentPosition = appState.position[appState.position.length - 1];
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [swapPiece, setSwapPiece] = useState(null);
    const [promotionCount, setPromotionCount] = useState({ w: 0, b: 0 });
    const [checkCount, setCheckCount] = useState({ w: 2, b: 2 });
     const [count, setCount] = useState({ w: 0, b: 0 });
    

    const promotionMappingButton = {
        'p': 'n',  // Pawn → Knight
        'n': 'b',  // Knight → Bishop
    };

    const promotionMappingMerge = {
        'p+p': 'n',  // Pawn + Pawn → Knight
        'n+n': 'b',  // Knight + Knight → Bishop
        'b+b': 'r',  // Bishop + Bishop → Rook
        'r+r': 'q'   // Rook + Rook → Queen
    };

    const calculateCoords = (e) => {
        const { width, left, top } = ref.current.getBoundingClientRect();
        const size = width / 8;
        const y = Math.floor((e.clientX - left) / size);
        const x = 7 - Math.floor((e.clientY - top) / size);
        return { x, y };
    };

    const onDrop = (e) => {
        const newPosition = copyPosition(currentPosition);
        const { x, y } = calculateCoords(e);
        const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
        const targetPiece = newPosition[x][y];

        if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
            if (targetPiece) {
                const mergedPromotionKey = `${movingPiece[1]}+${targetPiece[1]}`;
                const promotedPiece = promotionMappingMerge[mergedPromotionKey] || movingPiece[1];
                newPosition[x][y] = `${movingPiece[0]}${promotedPiece}`;
                newPosition[Number(rank)][Number(file)] = '';
            } else {
                newPosition[Number(rank)][Number(file)] = '';
                newPosition[x][y] = movingPiece;
            }

            const color = movingPiece[0];
            setCount((prevCount) => ({
                ...prevCount,
                [color]: prevCount[color] + 1,
            }));

            setSelectedPiece(null);

            dispatch(makeNewMove({ newPosition }));
        }
        dispatch(clearCandidates());
    };
   

    const onDragOver = (e) => e.preventDefault();

    const handlePieceClick = (rank, file) => {
        console.log("Piece Clicked:", rank, file);
        if (selectedPiece) {
            const { rank: prevRank, file: prevFile } = selectedPiece;
            const clickedPiece = currentPosition[rank][file];
            const selectedColor = currentPosition[prevRank][prevFile][0];
            const clickedColor = clickedPiece[0];

            if (selectedColor === clickedColor) {
                setSwapPiece({ rank, file });
            } else {
                setSelectedPiece(null);
            }
        } else {
            setSelectedPiece({ rank, file });
        }
    };

    // const handlePromotion = () => {
    //     if (selectedPiece) {
    //         const { rank, file } = selectedPiece;
    //         const piece = currentPosition[rank][file];
    //         const color = piece[0];
    
    //         if (color !== appState.turn) {
    //             console.log(`It's not ${color === 'w' ? 'White' : 'Black'}'s turn to promote.`);
    //             return;
    //         }
    
    //         if (promotionCount[color] < 2) {
    //             const newPiece = promotionMappingButton[piece[1]];
    
    //             if (newPiece) {
    //                 const newPosition = copyPosition(currentPosition);
    //                 newPosition[rank][file] = `${piece[0]}${newPiece}`;
    
    //                 dispatch(makeNewMove({ newPosition }));
    
    //                 // Update promotion count and check count
    //                 setPromotionCount((prevCount) => ({
    //                     ...prevCount,
    //                     [color]: prevCount[color] + 1,
    //                 }));
    
    //                 setCheckCount((prevCount) => ({
    //                     ...prevCount,
    //                     [color]: prevCount[color] - 1,
    //                 }));
    
    //                 setSelectedPiece(null);
    //             }
    //         } else {
    //             console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
    //         }
    //     }
    // };
    

    // const handlePromotion = () => {
    //     if (selectedPiece) {
    //         const { rank, file } = selectedPiece;
    //         const piece = currentPosition[rank][file];
    //         const color = piece[0];
    
    //         if (color !== appState.turn) {
    //             console.log(`It's not ${color === 'w' ? 'White' : 'Black'}'s turn to promote.`);
    //             return;
    //         }
    
    //         if (promotionCount[color] < 2) {
    //             const newPiece = promotionMappingButton[piece[1]];
    
    //             if (newPiece) {
    //                 const newPosition = copyPosition(currentPosition);
    //                 newPosition[rank][file] = `${piece[0]}${newPiece}`;
    
    //                 dispatch(makeNewMove({ newPosition, isPromotion: true }));
    
    //                 setPromotionCount((prevCount) => ({
    //                     ...prevCount,
    //                     [color]: prevCount[color] + 1,
    //                 }));
    
    //                 setCheckCount((prevCount) => ({
    //                     ...prevCount,
    //                     [color]: prevCount[color] - 1,
    //                 }));
    
    //                 setSelectedPiece(null);
    //             }
    //         } else {
    //             console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
    //         }
    //     }
    // };
    


    const handlePromotion = () => {
        if (selectedPiece) {
            const { rank, file } = selectedPiece;
            const piece = currentPosition[rank][file];
            const color = piece[0];
    
            if (color !== appState.turn) {
                console.log(`It's not ${color === 'w' ? 'White' : 'Black'}'s turn to promote.`);
                return;
            }
    
            if (promotionCount[color] < 2) {
                const newPiece = promotionMappingButton[piece[1]];
    
                if (newPiece) {
                    const newPosition = copyPosition(currentPosition);
                    newPosition[rank][file] = `${piece[0]}${newPiece}`;
    
                    console.log('Promotion is happening, not switching turns.');
                    dispatch(makeNewMove({ newPosition, isPromotion: true }));  // Pass isPromotion as true
    
                    setPromotionCount((prevCount) => ({
                        ...prevCount,
                        [color]: prevCount[color] + 1,
                    }));
    
                    setCheckCount((prevCount) => ({
                        ...prevCount,
                        [color]: prevCount[color] - 1,
                    }));
                    
    
                    setSelectedPiece(null);
                }
            } else {
                console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
            }
        }
    };
    

    
    

    return (
        <div className="chess-container">
            <div
                ref={ref}
                onDrop={onDrop}
                onDragOver={onDragOver}
                className='pieces'
            >
                {currentPosition.map((r, rank) =>
                    r.map((f, file) =>
                        currentPosition[rank][file] ? (
                            <Piece
                                key={rank + '-' + file}
                                rank={rank}
                                file={file}
                                piece={currentPosition[rank][file]}
                                onClick={() => handlePieceClick(rank, file)}
                                selected={selectedPiece?.rank === rank && selectedPiece?.file === file}
                            />
                        ) : null
                    )
                )}
            </div>

            <div className="swap-button-wrapper">
                <h2>Powerups <span>Remaining</span></h2>
                <SwapButton 
                    selectedPiece={selectedPiece}
                    swapPiece={swapPiece}
                    setSelectedPiece={setSelectedPiece}
                    setSwapPiece={setSwapPiece}
                    dispatch={dispatch}
                    
                />

                <button className='promote-btn' onClick={handlePromotion}>
                    Promote ( White {checkCount.w}, Black {checkCount.b})
                </button>
                <div style={{color:'white'}}>white {count.w}</div>
                <div style={{color:'white'}}>black {count.b}</div>
                
            </div>
        </div>
    );
}


//! recent





