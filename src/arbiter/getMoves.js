
// export const getRookMoves=({position,piece,rank,file})=>{
//     const moves=[]
//     const us=piece[0]
//    const enemy = us === 'w'? 'b' :'w'
    

//     const direction=[
//         [-1,0],
//         [1,0],
//         [0,-1],
//         [0,1],
//     ]

//     direction.forEach(dir=>{
//         for (let i = 1; i< 8; i++) {
//             const x=rank+(i*dir[0]);
//             const y=file+(i*dir[1])
//             if(position?.[x]?.[y]===undefined)
//             break
        
//         if(position[x][y] !== '')
//         break

//         moves.push([x,y])
//         } 
//     })
//     return moves
// }
export const getKnightMoves = ({position,rank,file}) => {
    const moves = []
    const enemy = position[rank][file].startsWith('w')?'b':'w' 

    const candidates = [
        [-2,-1],
        [-2,1],
        [-1,-2],
        [-1,2],
        [1,-2],
        [1,2],
        [2,-1],
        [2,1],
    ]
    candidates.forEach(c => {
        const cell = position?.[rank+c[0]]?.[file+c[1]]
        if(cell !== undefined && (cell.startsWith(enemy)|| cell === '')){
            moves.push ([rank+c[0],file+c[1]])
        }
    })
    return moves
}

//!



export const getRookMoves = ({position, piece, rank, file}) => {
    const moves = [];
    const us = piece[0];
    const enemy = us === 'w' ? 'b' : 'w';

    const direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    direction.forEach(dir => {
        for (let i = 1; i < 8; i++) {
            const x = rank + (i * dir[0]);
            const y = file + (i * dir[1]);

            if (x < 0 || x >= 8 || y < 0 || y >= 8) {
                break;
            }

            const targetPiece = position[x][y];
            if (targetPiece === '') {
                moves.push([x, y]);
            } else if (targetPiece[0] !== us) {
                moves.push([x, y]); // Allow capturing of different color pieces
                break; // Stop moving in this direction after capturing
            } else {
                break; // Stop moving if the piece is of the same color
            }
        }
    });

    return moves;
};
//!







// export const getBishopMoves = ({position,piece,rank,file}) => {
//     const moves = []
//     const us = piece[0]
//     const enemy = position[rank][file].startsWith('w')?'b':'w' 
    

//     const direction = [
//         [-1,-1],
//         [-1,1],
//         [1,-1],
//         [1,1],
//     ]

//     direction.forEach(dir => {
//         for (let i = 1; i <= 8; i++) {
//             const x = rank+(i*dir[0])
//             const y = file+(i*dir[1])
//             if(position?.[x]?.[y] === undefined)
//                 break
            
//             if(position[x][y] !== ''){
//                 break
//             }
//             moves.push ([x,y])
//         }
//     })
//     return moves
// }
export const getBishopMoves = ({ position, piece, rank, file }) => {
    const moves = [];
    const us = piece[0];
    const enemy = us === 'w' ? 'b' : 'w';

    const direction = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
    ];

    direction.forEach(dir => {
        for (let i = 1; i < 8; i++) {
            const x = rank + (i * dir[0]);
            const y = file + (i * dir[1]);
            if (x < 0 || x >= 8 || y < 0 || y >= 8) {
                break;
            }
            if (position[x][y] !== '') {
                if (position[x][y].startsWith(enemy)) {
                    moves.push([x, y]); // Capture move
                }
                break;
            }
            moves.push([x, y]); // Move to empty square
        }
    });

    return moves;
};


export const getQueenMoves = ({position,piece,rank,file}) => {
    const moves = [
        ...getBishopMoves({position,piece,rank,file}),
        ...getRookMoves({position,piece,rank,file})
    ]
    
    return moves
}

export const getKingMoves = ({position,piece,rank,file}) => {
    let moves = []
    const us = piece[0]
    const direction = [
        [1,-1], [1,0],  [1,1],
        [0,-1],         [0,1],
        [-1,-1],[-1,0], [-1,1],
    ]

    direction.forEach(dir => {
        const x = rank+dir[0]
        const y = file+dir[1]
        if(position?.[x]?.[y] !== undefined && !position[x][y].startsWith(us) )
        moves.push ([x,y])
    })
    return moves
}

export const getPawnMoves = ({position,piece,rank,file}) => {

    const moves = []
    const dir = piece==='wp' ? 1 : -1

    if (rank % 5 === 1){
        if (position?.[rank+dir]?.[file] === '' && position?.[rank+dir+dir]?.[file] === ''){
            moves.push ([rank+dir+dir,file])
        }
    }


    if (!position?.[rank+dir]?.[file]){
        moves.push ([rank+dir,file])
    }

    return moves
}

export const getPawnCaptures =  ({position,piece,rank,file}) => {

    const moves = []
    const dir = piece==='wp' ? 1 : -1
    const enemy = piece[0] === 'w' ? 'b' : 'w'

    // Capture enemy to left
    if (position?.[rank+dir]?.[file-1] && position?.[rank+dir]?.[file-1].startsWith(enemy) ){
        moves.push ([rank+dir,file-1])
    }

    // Capture enemy to right
    if (position?.[rank+dir]?.[file+1] && position?.[rank+dir]?.[file+1].startsWith(enemy) ){
        moves.push ([rank+dir,file+1])
    }

return moves
}

    
