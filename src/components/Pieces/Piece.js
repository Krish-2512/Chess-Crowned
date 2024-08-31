



//! basic moves




// import arbiter from "../../arbiter/arbiter";
// import { useAppContext } from "../../context/Context";
// import { generateCandidateMoves } from "../../reducer/actions/move";

// const Piece = ({ rank, file, piece }) => {
//     const { appState, dispatch } = useAppContext();
//     const { turn, position } = appState;
//     const currentPosition = position[position.length - 1];

//     const getMoves = () => {
//         // Get all possible moves using the arbiter
//         const moves = arbiter.getRegularMoves({
//             position: currentPosition,
//             piece,
//             rank,
//             file,
//         });

//         // Filter moves to only allow capturing similar pieces
//         return moves.filter(([x, y]) => {
//             const targetPiece = currentPosition[x][y];
//             if (targetPiece) {
//                 // Allow capture only if the target piece is of the same type (e.g., both are rooks)
//                 return targetPiece[1] === piece[1];
//             }
//             return true; // Allow regular non-capturing moves
//         });
//     };

//     const onDragStart = (e) => {
//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);
//         if (turn === piece[0]) {
//             const candidateMoves = getMoves();
//             dispatch(generateCandidateMoves({ candidateMoves }));
//         }
//     };

//     const onDragEnd = (e) => (e.target.style.display = 'block');

//     return (
//         <div
//             className={`piece ${piece} p-${file}${rank}`}
//             draggable={true}
//             onDragEnd={onDragEnd}
//             onDragStart={onDragStart}
//         />
//     );
// };

// export default Piece;








// import arbiter from "../../arbiter/arbiter";
// import { useAppContext } from "../../context/Context";
// import { generateCandidateMoves } from "../../reducer/actions/move";

// const Piece = ({ rank, file, piece }) => {
//     const { appState, dispatch } = useAppContext();
//     const { turn, position } = appState;
//     const currentPosition = position[position.length - 1];

//     const getMoves = () => {
//         // Get all possible moves using the arbiter
//         const moves = arbiter.getRegularMoves({
//             position: currentPosition,
//             piece,
//             rank,
//             file,
//         });

//         // Filter moves to only allow capturing similar pieces
//         return moves.filter(([x, y]) => {
//             const targetPiece = currentPosition[x][y];
//             if (targetPiece) {
//                 // Allow capture only if the target piece is of the same type (e.g., both are rooks)
//                 return targetPiece[1] === piece[1];
//             }
//             return true; // Allow regular non-capturing moves
//         });
//     };

//     const onDragStart = (e) => {
//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);

//         if (turn === piece[0]) {
//             const candidateMoves = getMoves();
//             dispatch(generateCandidateMoves({ candidateMoves }));
//         }
//     };

//     const onDragEnd = (e) => (e.target.style.display = 'block');

//     return (
//         <div
//             className={`piece ${piece} p-${file}${rank}`}
//             draggable={true}
//             onDragEnd={onDragEnd}
//             onDragStart={onDragStart}
//         />
//     );
// };

// export default Piece;













// import arbiter from "../../arbiter/arbiter";
// import { useAppContext } from "../../context/Context";
// import { generateCandidateMoves } from "../../reducer/actions/move";

// const Piece = ({ rank, file, piece, onClick }) => {  // Updated to pass onClick as prop
//     const { appState, dispatch } = useAppContext();
//     const { turn, position } = appState;
//     const currentPosition = position[position.length - 1];

//     const getMoves = () => {
//         const moves = arbiter.getRegularMoves({
//             position: currentPosition,
//             piece,
//             rank,
//             file,
//         });

//         return moves.filter(([x, y]) => {
//             const targetPiece = currentPosition[x][y];
//             if (targetPiece) {
//                 return targetPiece[1] === piece[1];
//             }
//             return true;
//         });
//     };

//     const onDragStart = (e) => {
//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);

//         if (turn === piece[0]) {
//             const candidateMoves = getMoves();
//             dispatch(generateCandidateMoves({ candidateMoves }));
//         }
//     };

//     const onDragEnd = (e) => (e.target.style.display = 'block');

//     return (
//         <div
//             className={`piece ${piece} p-${file}${rank}`}
//             draggable={true}
//             onDragEnd={onDragEnd}
//             onDragStart={onDragStart}
//             onClick={onClick}  // Added onClick to trigger the click handler
//         />
//     );
// };

// export default Piece;





















// import React from 'react';
// import arbiter from "../../arbiter/arbiter";
// import { useAppContext } from "../../context/Context";
// import { generateCandidateMoves } from "../../reducer/actions/move";
// import './Pieces.css';  

// const Piece = ({ rank, file, piece, onClick, selected }) => {
//     const { appState, dispatch } = useAppContext();
//     const { turn, position } = appState;
//     const currentPosition = position[position.length - 1];

//     const getMoves = () => {
//         const moves = arbiter.getRegularMoves({
//             position: currentPosition,
//             piece,
//             rank,
//             file,
//         });

//         return moves.filter(([x, y]) => {
//             const targetPiece = currentPosition[x][y];
//             if (targetPiece) {
//                 return targetPiece[1] === piece[1];
//             }
//             return true;
//         });
//     };

//     const onDragStart = (e) => {
//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);

//         if (turn === piece[0]) {
//             const candidateMoves = getMoves();
//             dispatch(generateCandidateMoves({ candidateMoves }));
//         }
//     };

//     const onDragEnd = (e) => (e.target.style.display = 'block');

//     return (
//         <div
//             className={`piece ${piece} p-${file}${rank} ${selected ? 'selected' : ''}`}
//             draggable={true}
//             onDragEnd={onDragEnd}
//             onDragStart={onDragStart}
//             onClick={onClick}
//         />
//     );
// };

// export default Piece;
















import React from 'react';
import arbiter from "../../arbiter/arbiter";
import { useAppContext } from "../../context/Context";
import { generateCandidateMoves } from "../../reducer/actions/move";
import './Pieces.css';  

const Piece = ({ rank, file, piece, onClick, selected }) => {
    const { appState, dispatch } = useAppContext();
    const { turn, position } = appState;
    const currentPosition = position[position.length - 1];

    const getMoves = () => {
        const moves = arbiter.getRegularMoves({
            position: currentPosition,
            piece,
            rank,
            file,
        });

        return moves.filter(([x, y]) => {
            const targetPiece = currentPosition[x][y];
            if (targetPiece) {
                return targetPiece[1] === piece[1];
            }
            return true;
        });
    };

    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);

        if (turn === piece[0]) {
            const candidateMoves = getMoves();
            dispatch(generateCandidateMoves({ candidateMoves }));
        }
    };

    const onDragEnd = (e) => (e.target.style.display = 'block');

    return (
        <div
            className={`piece ${piece} p-${file}${rank} ${selected ? 'selected' : ''}`}
            draggable={true}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onClick={onClick}
        />
    );
};

export default Piece;


