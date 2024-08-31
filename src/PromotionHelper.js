

// const promotionMap = {
//     'p+p': 'n',  // Pawn + Pawn → Knight
//     'n+n': 'b',  // Knight + Knight → Bishop
//     'b+b': 'r',  // Bishop + Bishop → Rook
//     'r+r': 'q'   // Rook + Rook → Queen
// };

// export const promotePiece = (piece1, piece2) => {
//     const key = `${piece1[1]}+${piece2[1]}`;
//     const newPiece = promotionMap[key];
//     return newPiece ? piece1[0] + newPiece : null;
// };







// src/helpers/PromotionHelper.js

// src/helpers/PromotionHelper.js

// src/helpers/PromotionHelper.js

// const promotionMap = {
//     'p+p': 'n',  // Pawn + Pawn → Knight
//     'n+n': 'b',  // Knight + Knight → Bishop
//     'b+b': 'r',  // Bishop + Bishop → Rook
//     'r+r': 'q'   // Rook + Rook → Queen
// };

// export const promotePiece = (movingPiece, targetPiece) => {
//     const key = `${movingPiece[1]}+${targetPiece[1]}`;
//     console.log(`Promotion Check: ${key}`);  // Debugging line
//     const promotedPiece = promotionMap[key];
//     console.log(`Promoted Piece: ${promotedPiece}`);  // Debugging line
//     return promotedPiece ? movingPiece[0] + promotedPiece : null;
// };










// const promotionMap = {
//     'p+p': 'n',  // Pawn + Pawn → Knight
//     'n+n': 'b',  // Knight + Knight → Bishop
//     'b+b': 'r',  // Bishop + Bishop → Rook
//     'r+r': 'q'   // Rook + Rook → Queen
// };

// export const promotePiece = (movingPiece, targetPiece) => {
//     const key = `${movingPiece[1]}+${targetPiece[1]}`;
//     console.log(`Promotion Check: ${key}`);  // Debugging line
//     const promotedPiece = promotionMap[key];
//     console.log(`Promoted Piece: ${promotedPiece}`);  // Debugging line
//     return promotedPiece ? movingPiece[0] + promotedPiece : null;
// };



const promotionMap = {
    'p+p': 'n',  // Pawn + Pawn → Knight
    'n+n': 'b',  // Knight + Knight → Bishop
    'b+b': 'r',  // Bishop + Bishop → Rook
    'r+r': 'q'   // Rook + Rook → Queen
};
export const promotePiece = (movingPiece, targetPiece) => {
    const movingPieceType = movingPiece[1]; 
    const targetPieceType = targetPiece[1]; 
    const key = `${movingPieceType}+${targetPieceType}`;
    console.log(`Moving Piece: ${movingPiece}, Target Piece: ${targetPiece}`);
    console.log(`Generated Key: ${key}`);  
    const promotedPiece = promotionMap[key];
    console.log(`Promotion Map Entry for Key "${key}": ${promotedPiece}`);  // Log the map entry
    return promotedPiece ? movingPiece[0] + promotedPiece : null;
};








