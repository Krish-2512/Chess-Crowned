// import actionTypes from "./actionTypes"
// export const reducer=(state,action)=>{
//     switch(action.type){
//         case actionTypes.NEW_MOVE:{
            
            
//             let {turn,position} =state
//             position=[
//                 ...position,
//                 action.payload.newPosition
//             ]

            
//             turn = turn==='w'?'b':'w'
            
            
            
            
//             // movesList = [
//             //     ...movesList,
//             //     action.payload.newMove
//             // ]
//             return{
//                 ...state,
//                 position,
//                 turn,
//                 // movesList,
                
//             }
           
//         }
        
//         case actionTypes.GENERATE_CANDIDATE_MOVES:{
//             return{
//                 ...state,
//                 candidateMoves:action.payload.candidateMoves
//             }


//         }
//         case actionTypes.CLEAR_CANDIDATE_MOVES:{
//             return{
//                 ...state,
//                 candidateMoves:[]
//             }

            
//         }
        

//         default:
//             return state
//     }

    
// }











import actionTypes from "./actionTypes";

export const reducer = (state, action) => {
    switch (action.type) {
        // case actionTypes.NEW_MOVE: {
        //     const { turn, position } = state;
        //     return {
        //         ...state,
        //         position: [...position, action.payload.newPosition],
        //         turn: turn === 'w' ? 'b' : 'w',
        //     };
        // }
        
        // case actionTypes.NEW_MOVE: {
        //     const { turn, position } = state;
        //     return {
        //         ...state,
        //         position: [...position, action.payload.newPosition],
        //         turn: turn === 'w' ? 'b' : 'w',  // Switch the turn after the move
        //     };
        // }
        // case actionTypes.NEW_MOVE: {
        //     const { turn, position } = state;
        //     const isPromotion = action.payload.isPromotion; // Check if the move is a promotion
        //     return {
        //         ...state,
        //         position: [...position, action.payload.newPosition],
        //         turn: isPromotion ? turn : turn === 'w' ? 'b' : 'w',  // Switch the turn only if it's not a promotion
        //     };
        // }
        


        case actionTypes.NEW_MOVE: {
            const { turn, position } = state;
            const { newPosition, isPromotion } = action.payload;
        
            return {
                ...state,
                position: [...position, newPosition],
                turn: isPromotion ? turn : (turn === 'w' ? 'b' : 'w'),  // Switch turn only if it's not a promotion
            };
        }
        
        
     
        
        case actionTypes.GENERATE_CANDIDATE_MOVES: {
            return {
                ...state,
                candidateMoves: action.payload.candidateMoves,
            };
        }

        case actionTypes.CLEAR_CANDIDATE_MOVES: {
            return {
                ...state,
                candidateMoves: [],
            };
        }

        default:
            return state;
    }
};



export default actionTypes;
