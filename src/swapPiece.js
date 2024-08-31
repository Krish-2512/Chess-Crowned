









// import React from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];

//     const handleSwap = () => {
//         console.log("Handle Swap called");
//         if (selectedPiece && swapPiece) {
//             console.log("Selected Piece:", selectedPiece);
//             console.log("Swap Piece:", swapPiece);

//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             // Check if both pieces are of the same color
//             if (selectedPieceColor === swapPieceColor) {
//                 const newPosition = copyPosition(currentPosition);
//                 const temp = newPosition[rank1][file1];
//                 newPosition[rank1][file1] = newPosition[rank2][file2];
//                 newPosition[rank2][file2] = temp;

//                 dispatch(makeNewMove({ newPosition }));
//                 setSelectedPiece(null);
//                 setSwapPiece(null);
//             } else {
//                 console.log("Pieces are not of the same color");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null");
//         }
//     };

//     return (
//         <button onClick={handleSwap} disabled={!selectedPiece || !swapPiece} >
//             Swap
//         </button>
//     );
// };

// export default SwapButton;


// ! upto diff swaps

// import React from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';
// import './swapPieces.css'

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];

//     const handleSwap = () => {
//         console.log("Handle Swap called");
//         if (selectedPiece && swapPiece) {
//             console.log("Selected Piece:", selectedPiece);
//             console.log("Swap Piece:", swapPiece);

//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             // Check if both pieces are of the same color
//             if (selectedPieceColor === swapPieceColor) {
//                 const newPosition = copyPosition(currentPosition);
//                 const temp = newPosition[rank1][file1];
//                 newPosition[rank1][file1] = newPosition[rank2][file2];
//                 newPosition[rank2][file2] = temp;

//                 dispatch(makeNewMove({ newPosition }));
//                 setSelectedPiece(null);
//                 setSwapPiece(null);
//             } else {
//                 console.log("Pieces are not of the same color");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null");
//         }
//     };

//     return (
//         <button className='swap-button' onClick={handleSwap} disabled={!selectedPiece || !swapPiece} >
//             Swap
//         </button>
//     );
// };

// export default SwapButton;


//! upt swap and promote basic

// import React, { useState } from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';
// import './swapPieces.css';

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const [checkCount,setCheckCount]  =useState({white:0,black:0});
    
   
//     const [swapCount, setSwapCount] = useState({ white: 0, black: 0 });

//     const handleSwap = () => {
//         if (selectedPiece && swapPiece) {
//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             // if (selectedPieceColor =='w') {
//             //     setCheckCount(2-swapCount.white)
//             //  }else{setCheckCount(2-swapCount.black)}
          
//             if (selectedPieceColor === swapPieceColor) {
//                 const color = selectedPieceColor === 'w' ? 'white' : 'black';

               
//                 if (swapCount[color] < 2) {
//                     const newPosition = copyPosition(currentPosition);
//                     const temp = newPosition[rank1][file1];
//                     newPosition[rank1][file1] = newPosition[rank2][file2];
//                     newPosition[rank2][file2] = temp;

//                     dispatch(makeNewMove({ newPosition }));

                   
//                     setSwapCount({ ...swapCount, [color]: swapCount[color] + 1 });

//                     setSelectedPiece(null);
//                     setSwapPiece(null);
                    
//             if (selectedPieceColor =='white') {
//                 setCheckCount(2-swapCount.white)
//              }else{setCheckCount(2-swapCount.black)}
          
//                 } else {
//                     console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} has reached the maximum number of swaps.`);
//                 }
//             } else {
//                 console.log("Pieces are not of the same color");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null");
//         }
//     };
   
         
       
 

//     return (
//         <button
//             className='swap-button'
//             onClick={handleSwap}
//             disabled={!selectedPiece || !swapPiece}
//         >
//         Swap{checkCount}
//         </button>
//     );
// };

// export default SwapButton;


// import React, { useState } from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';
// import './swapPieces.css';

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
    
//     // States to track the number of swaps allowed per color
//     const [swapCount, setSwapCount] = useState({ white: 0, black: 0 });
//     const [checkCount, setCheckCount] = useState({ white: 2, black: 2 });

//     const handleSwap = () => {
//         if (selectedPiece && swapPiece) {
//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             if (selectedPieceColor === swapPieceColor) {
//                 const color = selectedPieceColor === 'w' ? 'white' : 'black';

//                 // Check if the swap count for the color is less than 2
//                 if (swapCount[color] < 2) {
//                     const newPosition = copyPosition(currentPosition);
//                     const temp = newPosition[rank1][file1];
//                     newPosition[rank1][file1] = newPosition[rank2][file2];
//                     newPosition[rank2][file2] = temp;

//                     dispatch(makeNewMove({ newPosition }));

//                     // Increment the swap count and update the remaining swaps
//                     setSwapCount(prevCount => ({
//                         ...prevCount,
//                         [color]: prevCount[color] + 1
//                     }));

//                     setCheckCount(prevCount => ({
//                         ...prevCount,
//                         [color]: prevCount[color] - 1
//                     }));

//                     // Reset selected pieces after the swap
//                     setSelectedPiece(null);
//                     setSwapPiece(null);
//                 } else {
//                     console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} has reached the maximum number of swaps.`);
//                 }
//             } else {
//                 console.log("Pieces are not of the same color");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null");
//         }
//     };

//     return (
//         <button
//             className='swap-button'
//             onClick={handleSwap}
//             disabled={!selectedPiece || !swapPiece}
//         >
//             Swap ( White {checkCount.white}, Black {checkCount.black})
//         </button>
//     );
// };

// export default SwapButton;









// import React, { useState } from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';
// import './swapPieces.css';

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const currentTurn = appState.currentTurn; // Assuming this tracks whose turn it is ('w' for white, 'b' for black)
    
//     // States to track the number of swaps allowed per color
//     const [swapCount, setSwapCount] = useState({ white: 0, black: 0 });
//     const [checkCount, setCheckCount] = useState({ white: 2, black: 2 });

//     const handleSwap = () => {
//         if (selectedPiece && swapPiece) {
//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             if (selectedPieceColor === swapPieceColor) {
//                 const color = selectedPieceColor === 'w' ? 'white' : 'black';

//                 // Ensure the swap is only allowed on the player's turn
//                 if (selectedPieceColor === currentTurn) {
//                     // Check if the swap count for the color is less than 2
//                     if (swapCount[color] < 2) {
//                         const newPosition = copyPosition(currentPosition);
//                         const temp = newPosition[rank1][file1];
//                         newPosition[rank1][file1] = newPosition[rank2][file2];
//                         newPosition[rank2][file2] = temp;

//                         dispatch(makeNewMove({ newPosition }));

//                         // Increment the swap count and update the remaining swaps
//                         setSwapCount(prevCount => ({
//                             ...prevCount,
//                             [color]: prevCount[color] + 1
//                         }));

//                         setCheckCount(prevCount => ({
//                             ...prevCount,
//                             [color]: prevCount[color] - 1
//                         }));

//                         // Reset selected pieces after the swap
//                         setSelectedPiece(null);
//                         setSwapPiece(null);
//                     } else {
//                         console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} has reached the maximum number of swaps.`);
//                     }
//                 } else {
//                     console.log("It's not your turn to swap.");
//                 }
//             } else {
//                 console.log("Pieces are not of the same color.");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null.");
//         }
//     };

//     return (
//         <button
//             className='swap-button'
//             onClick={handleSwap}
//             disabled={!selectedPiece || !swapPiece}
//         >
//             Swap (White {checkCount.white}, Black {checkCount.black})
//         </button>
//     );
// };

// export default SwapButton;


// import React, { useState } from 'react';
// import { copyPosition } from './helper';
// import { makeNewMove } from './reducer/actions/move';
// import { useAppContext } from './context/Context';
// import './swapPieces.css';

// const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
//     const { appState, dispatch } = useAppContext();
//     const currentPosition = appState.position[appState.position.length - 1];
//     const currentTurn = appState.currentTurn || 'w'; // Default to 'w' if undefined

//     // States to track the number of swaps allowed per color
//     const [swapCount, setSwapCount] = useState({ white: 0, black: 0 });
//     const [checkCount, setCheckCount] = useState({ white: 2, black: 2 });

//     const handleSwap = () => {
//         if (selectedPiece && swapPiece) {
//             const { rank: rank1, file: file1 } = selectedPiece;
//             const { rank: rank2, file: file2 } = swapPiece;

//             const selectedPieceColor = currentPosition[rank1][file1][0];
//             const swapPieceColor = currentPosition[rank2][file2][0];

//             console.log("Selected Piece Color:", selectedPieceColor);
//             console.log("Swap Piece Color:", swapPieceColor);
//             console.log("Current Turn:", currentTurn);

//             if (selectedPieceColor === swapPieceColor) {
//                 const color = selectedPieceColor === 'w' ? 'white' : 'black';

//                 // Debug the turn check
//                 if (selectedPieceColor === currentTurn) {
//                     if (swapCount[color] < 2) {
//                         const newPosition = copyPosition(currentPosition);
//                         const temp = newPosition[rank1][file1];
//                         newPosition[rank1][file1] = newPosition[rank2][file2];
//                         newPosition[rank2][file2] = temp;

//                         dispatch(makeNewMove({ newPosition }));

//                         setSwapCount(prevCount => ({
//                             ...prevCount,
//                             [color]: prevCount[color] + 1
//                         }));

//                         setCheckCount(prevCount => ({
//                             ...prevCount,
//                             [color]: prevCount[color] - 1
//                         }));

//                         setSelectedPiece(null);
//                         setSwapPiece(null);
//                     } else {
//                         console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} has reached the maximum number of swaps.`);
//                     }
//                 } else {
//                     console.log("It's not your turn to swap.");
//                 }
//             } else {
//                 console.log("Pieces are not of the same color.");
//             }
//         } else {
//             console.log("SelectedPiece or SwapPiece is null.");
//         }
//     };

//     return (
//         <button
//             className='swap-button'
//             onClick={handleSwap}
//             disabled={!selectedPiece || !swapPiece}
//         >
//             Swap (White {checkCount.white}, Black {checkCount.black})
//         </button>
//     );
// };

// export default SwapButton;











import React, { useState } from 'react';
import { copyPosition } from './helper';
import { makeNewMove } from './reducer/actions/move';
import { useAppContext } from './context/Context';
import './swapPieces.css';

const SwapButton = ({ selectedPiece, swapPiece, setSelectedPiece, setSwapPiece }) => {
    const { appState, dispatch } = useAppContext();
    const currentPosition = appState.position[appState.position.length - 1];
    const currentTurn = appState.turn || 'w'; // Default to 'w' if undefined

    // States to track the number of swaps allowed per color
    const [swapCount, setSwapCount] = useState({ white: 0, black: 0 });
    const [checkCount, setCheckCount] = useState({ white: 4, black: 4 });
   

    const handleSwap = () => {
        if (selectedPiece && swapPiece) {
            const { rank: rank1, file: file1 } = selectedPiece;
            const { rank: rank2, file: file2 } = swapPiece;

            const selectedPieceColor = currentPosition[rank1][file1][0];
            const swapPieceColor = currentPosition[rank2][file2][0];

            console.log("Selected Piece Color:", selectedPieceColor);
            console.log("Swap Piece Color:", swapPieceColor);
            console.log("Current Turn:", currentTurn);

            if (selectedPieceColor === swapPieceColor) {
                const color = selectedPieceColor === 'w' ? 'white' : 'black';

                // Check if it's the player's turn and swap count is valid
                if (selectedPieceColor === currentTurn) {
                    if (swapCount[color] < 4) {
                        const newPosition = copyPosition(currentPosition);
                        const temp = newPosition[rank1][file1];
                        newPosition[rank1][file1] = newPosition[rank2][file2];
                        newPosition[rank2][file2] = temp;

                        dispatch(makeNewMove({ newPosition }));

                        setSwapCount(prevCount => ({
                            ...prevCount,
                            [color]: prevCount[color] + 1
                        }));

                        setCheckCount(prevCount => ({
                            ...prevCount,
                            [color]: prevCount[color] - 1
                        }));
                        
                        setSelectedPiece(null);
                        setSwapPiece(null);
                    } else {
                        console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} has reached the maximum number of swaps.`);
                    }
                } else {
                    console.log("It's not your turn to swap.");
                }
            } else {
                console.log("Pieces are not of the same color.");
            }
        } else {
            console.log("SelectedPiece or SwapPiece is null.");
        }
       
    };

    return (
        <button
            className='swap-button'
            onClick={handleSwap}
            disabled={!selectedPiece || !swapPiece}
        >
            Swap (White {checkCount.white}, Black {checkCount.black})
        </button>
    );
};

export default SwapButton;
