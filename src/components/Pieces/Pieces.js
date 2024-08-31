





// import './Pieces.css';
// import Piece from './Piece';
// import { useState, useRef } from 'react';
// import { createPosition, copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import { promotePiece } from '../../PromotionHelper';




// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

   


//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];
    
//         console.log(`On Drop - Moving Piece: ${movingPiece}, Target Piece: ${targetPiece}`);  // Log pieces for debugging
    
//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 // Attempt promotion
//                 const promotedPiece = promotePiece(movingPiece, targetPiece);
//                 if (promotedPiece) {
//                     newPosition[x][y] = promotedPiece; // Place the promoted piece
//                     newPosition[Number(rank)][Number(file)] = ''; // Remove the old piece
//                 } else {
//                     newPosition[Number(rank)][Number(file)] = ''; // Regular move
//                     newPosition[x][y] = movingPiece;
//                 }
//             } else {
//                 newPosition[Number(rank)][Number(file)] = ''; // Regular move
//                 newPosition[x][y] = movingPiece; // Place the new piece
//             }
    
//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };
    






    
//     const onDragOver = (e) => e.preventDefault();

//     return (
//         <div
//             ref={ref}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//             className='pieces'
//         >
//             {currentPosition.map((r, rank) =>
//                 r.map((f, file) =>
//                     currentPosition[rank][file] ? (
//                         <Piece
//                             key={rank + '-' + file}
//                             rank={rank}
//                             file={file}
//                             piece={currentPosition[rank][file]}
//                         />
//                     ) : null
//                 )
//             )}
//         </div>
//     );
// }







// import './Pieces.css';
// import Piece from './Piece';
// import { useState, useRef } from 'react';
// import { createPosition, copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import { promotePiece } from '../../PromotionHelper';

// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [selectedPiece, setSelectedPiece] = useState(null);

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];
    
//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 const promotedPiece = promotePiece(movingPiece, targetPiece);
//                 if (promotedPiece) {
//                     newPosition[x][y] = promotedPiece;
//                     newPosition[Number(rank)][Number(file)] = '';
//                 } else {
//                     newPosition[Number(rank)][Number(file)] = '';
//                     newPosition[x][y] = movingPiece;
//                 }
//             } else {
//                 newPosition[Number(rank)][Number(file)] = '';
//                 newPosition[x][y] = movingPiece;
//             }
    
//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };

//     const onDragOver = (e) => e.preventDefault();

//     const handlePieceClick = (rank, file) => {
//         if (selectedPiece) {
//             const { rank: prevRank, file: prevFile } = selectedPiece;
//             const newPosition = copyPosition(currentPosition);
//             newPosition[rank][file] = currentPosition[prevRank][prevFile];
//             newPosition[prevRank][prevFile] = currentPosition[rank][file];
//             dispatch(makeNewMove({ newPosition }));
//             setSelectedPiece(null);
//         } else {
//             setSelectedPiece({ rank, file });
//         }
//     };

//     return (
//         <div
//             ref={ref}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//             className='pieces'
//         >
//             {currentPosition.map((r, rank) =>
//                 r.map((f, file) =>
//                     currentPosition[rank][file] ? (
//                         <Piece
//                             key={rank + '-' + file}
//                             rank={rank}
//                             file={file}
//                             piece={currentPosition[rank][file]}
//                             onClick={() => handlePieceClick(rank, file)}
//                         />
//                     ) : null
//                 )
//             )}
//         </div>
//     );
// }














// import './Pieces.css';
// import Piece from './Piece';
// import React, { useState, useRef } from 'react';
// import { copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import SwapButton from '../../swapPiece';

// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [selectedPiece, setSelectedPiece] = useState(null);
//     const [swapPiece, setSwapPiece] = useState(null);
//     const [promotionCount, setPromotionCount] = useState({ w: 0, b: 0 });
//     const [checkCount, setCheckCount] = useState({ w: 2, b: 2 });

//     const promotionMapping = {
//         'p': 'n',  
//         'n': 'b', 
//         'b':'r'
        
//     };

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];

//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 const promotedPiece = promotionMapping[movingPiece[1]] || movingPiece;
//                 newPosition[x][y] = `${movingPiece[0]}${promotedPiece}`;
//                 newPosition[Number(rank)][Number(file)] = '';
//             } else {
//                 newPosition[Number(rank)][Number(file)] = '';
//                 newPosition[x][y] = movingPiece;
//             }

//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };

//     const onDragOver = (e) => e.preventDefault();

//     const handlePieceClick = (rank, file) => {
//         console.log("Piece Clicked:", rank, file);
//         if (selectedPiece) {
//             const { rank: prevRank, file: prevFile } = selectedPiece;
//             const clickedPiece = currentPosition[rank][file];
//             const selectedColor = currentPosition[prevRank][prevFile][0];
//             const clickedColor = clickedPiece[0];

//             if (selectedColor === clickedColor) {
//                 setSwapPiece({ rank, file });
//             } else {
//                 setSelectedPiece(null);
//             }
//         } else {
//             setSelectedPiece({ rank, file });
//         }
//     };

//     const handlePromotion = () => {
//         if (selectedPiece) {
//             const { rank, file } = selectedPiece;
//             const piece = currentPosition[rank][file];
//             const color = piece[0];

//             if (promotionCount[color] < 2) {
//                 const newPiece = promotionMapping[piece[1]];

//                 if (newPiece) {
//                     const newPosition = copyPosition(currentPosition);
//                     newPosition[rank][file] = `${piece[0]}${newPiece}`;
//                     dispatch(makeNewMove({ newPosition }));

//                     setPromotionCount((prevCount) => ({
//                         ...prevCount,
//                         [color]: prevCount[color] + 1,
//                     }));
//                     setCheckCount(prevCount => ({
//                         ...prevCount,
//                         [color]: prevCount[color] - 1
//                     }));

//                     setSelectedPiece(null);
//                 }
//             } else {
//                 console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
//             }
//         }
//     };

//     return (
//         <div className="chess-container">
//             <div
//                 ref={ref}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 className='pieces'
//             >
//                 {currentPosition.map((r, rank) =>
//                     r.map((f, file) =>
//                         currentPosition[rank][file] ? (
//                             <Piece
//                                 key={rank + '-' + file}
//                                 rank={rank}
//                                 file={file}
//                                 piece={currentPosition[rank][file]}
//                                 onClick={() => handlePieceClick(rank, file)}
//                             />
//                         ) : null
//                     )
//                 )}
//             </div>

//             <div className="swap-button-wrapper">
//                 <h2 >Powerups <span>Remaining</span></h2>
//                 <SwapButton 
//                     selectedPiece={selectedPiece}
//                     swapPiece={swapPiece}
//                     setSelectedPiece={setSelectedPiece}
//                     setSwapPiece={setSwapPiece}
//                     dispatch={dispatch}
//                 />

//                 <button className='promote-btn' onClick={handlePromotion}>
//                     Promote ( White {checkCount.w}, Black {checkCount.b})
//                 </button>
//             </div>
//         </div>
//     );
// }





// import './Pieces.css';
// import Piece from './Piece';
// import React, { useState, useRef } from 'react';
// import { copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import SwapButton from '../../swapPiece';

// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [selectedPiece, setSelectedPiece] = useState(null);
//     const [swapPiece, setSwapPiece] = useState(null);
//     const [promotionCount, setPromotionCount] = useState({ w: 0, b: 0 });
//     const [checkCount, setCheckCount] = useState({ w: 2, b: 2 });

//     // Promotion Mapping for Button (up to Bishop)
//     const promotionMappingButton = {
//         'p': 'n',  // Pawn → Knight
//         'n': 'b',  // Knight → Bishop
//     };

//     // Promotion Mapping for Merging (up to Rook)
//     const promotionMappingMerge = {
//         'p+p': 'n',  // Pawn + Pawn → Knight
//         'n+n': 'b',  // Knight + Knight → Bishop
//         'b+b': 'r',  // Bishop + Bishop → Rook
//         'r+r':'q'
//     };

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];

//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 const mergedPromotionKey = `${movingPiece[1]}+${targetPiece[1]}`;
//                 const promotedPiece = promotionMappingMerge[mergedPromotionKey] || movingPiece[1];
//                 newPosition[x][y] = `${movingPiece[0]}${promotedPiece}`;
//                 newPosition[Number(rank)][Number(file)] = '';
//             } else {
//                 newPosition[Number(rank)][Number(file)] = '';
//                 newPosition[x][y] = movingPiece;
//             }

//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };

//     const onDragOver = (e) => e.preventDefault();

//     const handlePieceClick = (rank, file) => {
//         console.log("Piece Clicked:", rank, file);
//         if (selectedPiece) {
//             const { rank: prevRank, file: prevFile } = selectedPiece;
//             const clickedPiece = currentPosition[rank][file];
//             const selectedColor = currentPosition[prevRank][prevFile][0];
//             const clickedColor = clickedPiece[0];

//             if (selectedColor === clickedColor) {
//                 setSwapPiece({ rank, file });
//             } else {
//                 setSelectedPiece(null);
//             }
//         } else {
//             setSelectedPiece({ rank, file });
//         }
//     };

//     const handlePromotion = () => {
//         if (selectedPiece) {
//             const { rank, file } = selectedPiece;
//             const piece = currentPosition[rank][file];
//             const color = piece[0];

//             if (promotionCount[color] < 2) {
//                 const newPiece = promotionMappingButton[piece[1]];

//                 if (newPiece) {
//                     const newPosition = copyPosition(currentPosition);
//                     newPosition[rank][file] = `${piece[0]}${newPiece}`;
//                     dispatch(makeNewMove({ newPosition }));

//                     setPromotionCount((prevCount) => ({
//                         ...prevCount,
//                         [color]: prevCount[color] + 1,
//                     }));
//                     setCheckCount(prevCount => ({
//                         ...prevCount,
//                         [color]: prevCount[color] - 1
//                     }));

//                     setSelectedPiece(null);
//                 }
//             } else {
//                 console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
//             }
//         }
//     };

//     return (
//         <div className="chess-container">
//             <div
//                 ref={ref}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 className='pieces'
//             >
//                 {currentPosition.map((r, rank) =>
//                     r.map((f, file) =>
//                         currentPosition[rank][file] ? (
//                             <Piece
//                                 key={rank + '-' + file}
//                                 rank={rank}
//                                 file={file}
//                                 piece={currentPosition[rank][file]}
//                                 onClick={() => handlePieceClick(rank, file)}
//                             />
//                         ) : null
//                     )
//                 )}
//             </div>

//             <div className="swap-button-wrapper">
//                 <h2>Powerups <span>Remaining</span></h2>
//                 <SwapButton 
//                     selectedPiece={selectedPiece}
//                     swapPiece={swapPiece}
//                     setSelectedPiece={setSelectedPiece}
//                     setSwapPiece={setSwapPiece}
//                     dispatch={dispatch}
//                 />

//                 <button className='promote-btn' onClick={handlePromotion}>
//                     Promote ( White {checkCount.w}, Black {checkCount.b})
//                 </button>
//             </div>
//         </div>
//     );
// }








// import './Pieces.css';
// import Piece from './Piece';
// import React, { useState, useRef } from 'react';
// import { copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import SwapButton from '../../swapPiece';

// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [selectedPiece, setSelectedPiece] = useState(null);
//     const [swapPiece, setSwapPiece] = useState(null);
//     const [promotionCount, setPromotionCount] = useState({ w: 0, b: 0 });
//     const [checkCount, setCheckCount] = useState({ w: 2, b: 2 });
//     const [count, setCount] = useState({ w: 0, b:0 });

//     // Promotion Mapping for Button (up to Bishop)
//     const promotionMappingButton = {
//         'p': 'n',  // Pawn → Knight
//         'n': 'b',  // Knight → Bishop
//     };

//     // Promotion Mapping for Merging (up to Rook)
//     const promotionMappingMerge = {
//         'p+p': 'n',  // Pawn + Pawn → Knight
//         'n+n': 'b',  // Knight + Knight → Bishop
//         'b+b': 'r',  // Bishop + Bishop → Rook
//         'r+r': 'q'   // Rook + Rook → Queen
//     };

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];

//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 const mergedPromotionKey = `${movingPiece[1]}+${targetPiece[1]}`;
//                 const promotedPiece = promotionMappingMerge[mergedPromotionKey] || movingPiece[1];
//                 newPosition[x][y] = `${movingPiece[0]}${promotedPiece}`;
//                 newPosition[Number(rank)][Number(file)] = '';
//             } else {
//                 newPosition[Number(rank)][Number(file)] = '';
//                 newPosition[x][y] = movingPiece;
//             }

//             // Increment the move count for the color that moved
//             const color = movingPiece[0];
//             setCount((prevCount) => ({
//                 ...prevCount,
//                 [color]: prevCount[color] + 1,
//             }));
           

//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };

//     const onDragOver = (e) => e.preventDefault();

//     const handlePieceClick = (rank, file) => {
//         console.log("Piece Clicked:", rank, file);
//         if (selectedPiece) {
//             const { rank: prevRank, file: prevFile } = selectedPiece;
//             const clickedPiece = currentPosition[rank][file];
//             const selectedColor = currentPosition[prevRank][prevFile][0];
//             const clickedColor = clickedPiece[0];

//             if (selectedColor === clickedColor) {
//                 setSwapPiece({ rank, file });
//             } else {
//                 setSelectedPiece(null);
//             }
//         } else {
//             setSelectedPiece({ rank, file });
//         }
//     };

//     const handlePromotion = () => {
//         if (selectedPiece) {
//             const { rank, file } = selectedPiece;
//             const piece = currentPosition[rank][file];
//             const color = piece[0];

//             if (promotionCount[color] < 2) {
//                 const newPiece = promotionMappingButton[piece[1]];

//                 if (newPiece) {
//                     const newPosition = copyPosition(currentPosition);
//                     newPosition[rank][file] = `${piece[0]}${newPiece}`;
//                     dispatch(makeNewMove({ newPosition }));

//                     setPromotionCount((prevCount) => ({
//                         ...prevCount,
//                         [color]: prevCount[color] + 1,
//                     }));
//                     setCheckCount(prevCount => ({
//                         ...prevCount,
//                         [color]: prevCount[color] - 1
//                     }));

//                     setSelectedPiece(null);
//                 }
//             } else {
//                 console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
//             }
//         }
//     };

//     return (
//         <div className="chess-container">
//             <div
//                 ref={ref}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 className='pieces'
//             >
//                 {currentPosition.map((r, rank) =>
//                     r.map((f, file) =>
//                         currentPosition[rank][file] ? (
//                             <Piece
//                                 key={rank + '-' + file}
//                                 rank={rank}
//                                 file={file}
//                                 piece={currentPosition[rank][file]}
//                                 onClick={() => handlePieceClick(rank, file)}
//                                 selected={selectedPiece?.rank === rank && selectedPiece?.file === file}
//                             />
//                         ) : null
//                     )
//                 )}
//             </div>

//             <div className="swap-button-wrapper">
//                 <h2>Powerups <span>Remaining</span></h2>
//                 <SwapButton 
//                     selectedPiece={selectedPiece}
//                     swapPiece={swapPiece}
//                     setSelectedPiece={setSelectedPiece}
//                     setSwapPiece={setSwapPiece}
//                     dispatch={dispatch}
//                 />

//                 <button className='promote-btn' onClick={handlePromotion}>
//                     Promote ( White {checkCount.w}, Black {checkCount.b})
                    
//                 </button>
//                      {
//                         console.log(count)
//                      }
//                 {/* <div className="move-count">
//                     <p>White Moves: {count.w}</p>
//                     <p>Black Moves: {count.b}</p>
//                 </div> */}
//             </div>
//         </div>
//     );
// }










// import './Pieces.css';
// import Piece from './Piece';
// import React, { useState, useRef } from 'react';
// import { copyPosition } from '../../helper';
// import { useAppContext } from '../../context/Context';
// import { clearCandidates, makeNewMove } from '../../reducer/actions/move';
// import SwapButton from '../../swapPiece';

// export default function Pieces() {
//     const ref = useRef();
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [selectedPiece, setSelectedPiece] = useState(null);
//     const [swapPiece, setSwapPiece] = useState(null);
//     const [promotionCount, setPromotionCount] = useState({ w: 0, b: 0 });
//     const [checkCount, setCheckCount] = useState({ w: 2, b: 2 });
//     const [count, setCount] = useState({ w: 0, b:0 });

//     // Promotion Mapping for Button (up to Bishop)
//     const promotionMappingButton = {
//         'p': 'n',  // Pawn → Knight
//         'n': 'b',  // Knight → Bishop
//     };

//     // Promotion Mapping for Merging (up to Rook)
//     const promotionMappingMerge = {
//         'p+p': 'n',  // Pawn + Pawn → Knight
//         'n+n': 'b',  // Knight + Knight → Bishop
//         'b+b': 'r',  // Bishop + Bishop → Rook
//         'r+r': 'q'   // Rook + Rook → Queen
//     };

//     const calculateCoords = (e) => {
//         const { width, left, top } = ref.current.getBoundingClientRect();
//         const size = width / 8;
//         const y = Math.floor((e.clientX - left) / size);
//         const x = 7 - Math.floor((e.clientY - top) / size);
//         return { x, y };
//     };

//     const onDrop = (e) => {
//         const newPosition = copyPosition(currentPosition);
//         const { x, y } = calculateCoords(e);
//         const [movingPiece, rank, file] = e.dataTransfer.getData('text').split(',');
//         const targetPiece = newPosition[x][y];

//         if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
//             if (targetPiece) {
//                 const mergedPromotionKey = `${movingPiece[1]}+${targetPiece[1]}`;
//                 const promotedPiece = promotionMappingMerge[mergedPromotionKey] || movingPiece[1];
//                 newPosition[x][y] = `${movingPiece[0]}${promotedPiece}`;
//                 newPosition[Number(rank)][Number(file)] = '';
//             } else {
//                 newPosition[Number(rank)][Number(file)] = '';
//                 newPosition[x][y] = movingPiece;
//             }

//             // Increment the move count for the color that moved
//             const color = movingPiece[0];
//             setCount((prevCount) => ({
//                 ...prevCount,
//                 [color]: prevCount[color] + 1,
//             }));

//             // Clear the selected piece after the move
//             setSelectedPiece(null);

//             dispatch(makeNewMove({ newPosition }));
//         }
//         dispatch(clearCandidates());
//     };

//     const onDragOver = (e) => e.preventDefault();

//     const handlePieceClick = (rank, file) => {
//         console.log("Piece Clicked:", rank, file);
//         if (selectedPiece) {
//             const { rank: prevRank, file: prevFile } = selectedPiece;
//             const clickedPiece = currentPosition[rank][file];
//             const selectedColor = currentPosition[prevRank][prevFile][0];
//             const clickedColor = clickedPiece[0];

//             if (selectedColor === clickedColor) {
//                 setSwapPiece({ rank, file });
//             } else {
//                 setSelectedPiece(null);
//             }
//         } else {
//             setSelectedPiece({ rank, file });
//         }
//     };

//     // const handlePromotion = () => {
//     //     if (selectedPiece) {
//     //         const { rank, file } = selectedPiece;
//     //         const piece = currentPosition[rank][file];
//     //         const color = piece[0];

//     //         if (promotionCount[color] < 2) {
//     //             const newPiece = promotionMappingButton[piece[1]];

//     //             if (newPiece) {
//     //                 const newPosition = copyPosition(currentPosition);
//     //                 newPosition[rank][file] = `${piece[0]}${newPiece}`;
//     //                 dispatch(makeNewMove({ newPosition }));

//     //                 setPromotionCount((prevCount) => ({
//     //                     ...prevCount,
//     //                     [color]: prevCount[color] + 1,
//     //                 }));
//     //                 setCheckCount(prevCount => ({
//     //                     ...prevCount,
//     //                     [color]: prevCount[color] - 1
//     //                 }));

//     //                 setSelectedPiece(null);
//     //             }
//     //         } else {
//     //             console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
//     //         }
//     //     }
//     // };
//     const handlePromotion = () => {
//         if (selectedPiece) {
//             const { rank, file } = selectedPiece;
//             const piece = currentPosition[rank][file];
//             const color = piece[0];
    
//             // Check if the selected piece's color matches the current turn
//             if (color === appState.turn) {
//                 if (promotionCount[color] < 2) {
//                     const newPiece = promotionMappingButton[piece[1]];
    
//                     if (newPiece) {
//                         const newPosition = copyPosition(currentPosition);
//                         newPosition[rank][file] = `${piece[0]}${newPiece}`;
                        
//                         // Directly update the position without triggering a move
//                         dispatch({
//                             type: 'UPDATE_POSITION',
//                             payload: newPosition,
//                         });
    
//                         setPromotionCount((prevCount) => ({
//                             ...prevCount,
//                             [color]: prevCount[color] + 1,
//                         }));
//                         setCheckCount((prevCount) => ({
//                             ...prevCount,
//                             [color]: prevCount[color] - 1,
//                         }));
    
//                         setSelectedPiece(null);
//                     }
//                 } else {
//                     console.log(`${color === 'w' ? 'White' : 'Black'} has already used 2 promotions.`);
//                 }
//             } else {
//                 console.log(`It's ${appState.turn === 'w' ? 'White' : 'Black'}'s turn.`);
//             }
//         }
//     };
    

//     return (
//         <div className="chess-container">
//             <div
//                 ref={ref}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 className='pieces'
//             >
//                 {currentPosition.map((r, rank) =>
//                     r.map((f, file) =>
//                         currentPosition[rank][file] ? (
//                             <Piece
//                                 key={rank + '-' + file}
//                                 rank={rank}
//                                 file={file}
//                                 piece={currentPosition[rank][file]}
//                                 onClick={() => handlePieceClick(rank, file)}
//                                 selected={selectedPiece?.rank === rank && selectedPiece?.file === file}
//                             />
//                         ) : null
//                     )
//                 )}
//             </div>

//             <div className="swap-button-wrapper">
//                 <h2>Powerups <span>Remaining</span></h2>
//                 <SwapButton 
//                     selectedPiece={selectedPiece}
//                     swapPiece={swapPiece}
//                     setSelectedPiece={setSelectedPiece}
//                     setSwapPiece={setSwapPiece}
//                     dispatch={dispatch}
//                 />

//                 <button className='promote-btn' onClick={handlePromotion}>
//                     Promote ( White {checkCount.w}, Black {checkCount.b})
//                 </button>
//                 {
//                     console.log(count)
//                 }
//                 {/* <div className="move-count">
//                     <p>White Moves: {count.w}</p>
//                     <p>Black Moves: {count.b}</p>
//                 </div> */}
//             </div>
//         </div>
//     );
// }













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
                {
                    console.log(count)
                }
            </div>
        </div>
    );
}
