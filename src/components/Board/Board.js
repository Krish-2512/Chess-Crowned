




// import './Board.css';
// import Files from './bits/Files';
// import Rank from './bits/Rank';
// import Pieces from '../Pieces/Pieces';
// import { useAppContext } from '../../context/Context';
// import CountdownTimer from '../Timer/CountTimer';

// const Board = () => {
//     const ranks = Array(8).fill().map((x, i) => 8 - i);
//     const files = Array(8).fill().map((x, i) => i + 1);

//     const { appState } = useAppContext();
//     const position = appState.position[appState.position.length - 1];

//     const getClassName = (i, j) => {
//         let c = 'tile ';
//         c += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light ';
//         if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)) {
//             if (position[i][j])
//                 c += 'attacking';
//             else c += 'highlight';
//         }
//         return c;
//     };

//     return (
//         <div className="game-container">
       
//                 <div className="Board">
//                     <Rank ranks={ranks} />
//                     <div className="tiles">
//                         {ranks.map((rank, i) =>
//                             files.map((file, j) =>
//                                 <div key={file + '-' + rank} className={getClassName(7 - i, j)}></div>
//                             )
//                         )}
//                     </div>
//                     <Pieces />
//                     <Files files={files} />
//                 </div>
//                 <div className="board-timer-container">
//                 <CountdownTimer />
//             </div>
//          </div>
//     );
// };

// export default Board;






import React, { useState, useEffect } from 'react';
import './Board.css';
import Files from './bits/Files';
import Rank from './bits/Rank';
import Pieces from '../Pieces/Pieces';
import { useAppContext } from '../../context/Context';
import CountdownTimer from '../Timer/CountTimer';

const Board = () => {
    const ranks = Array(8).fill().map((x, i) => 8 - i);
    const files = Array(8).fill().map((x, i) => i + 1);
    
    const { appState } = useAppContext();
    const position = appState.position[appState.position.length - 1];
    
    const [winner, setWinner] = useState(null);

    const getClassName = (i, j) => {
        let c = 'tile ';
        c += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light ';
        if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)) {
            if (position[i][j]) c += 'attacking';
            else c += 'highlight';
        }
        return c;
    };

  
    useEffect(() => {
        const checkWinner = () => {
          
            for (let row of position) {
                if (row.includes('wq')) {
                    setWinner('White Wins by making Queen!');
                    return;
                }
                if (row.includes('bq')) {
                    setWinner('Black Wins by making Queen!');
                    return;
                }
            }
        };
        checkWinner();
    }, [position]);

    return (
        <div className="game-container">
            
            <div className="Board">
                <Rank ranks={ranks} />
                <div className="tiles">
                    {ranks.map((rank, i) =>
                        files.map((file, j) =>
                            <div key={file + '-' + rank} className={getClassName(7 - i, j)}></div>
                        )
                    )}
                </div>
                <Pieces />
                <Files files={files} />
            </div>
           <div className='time'>
            <div className="right-timer">
                <CountdownTimer side="black" setWinner={setWinner} />
            </div>
            <div className="left-timer">
                <CountdownTimer side="white" setWinner={setWinner} />
            </div>
            </div>
            
           
            {winner  && (
                <div className="winner-display">
                    <h1>{winner}</h1>
                </div>
            )}
        </div>
    );
};

export default Board;








// import React, { useState, useEffect } from 'react';
// import './Board.css';
// import Files from './bits/Files';
// import Rank from './bits/Rank';
// import Pieces from '../Pieces/Pieces';
// import { useAppContext } from '../../context/Context';
// import CountdownTimer from '../Timer/CountTimer';
// import socket from '../../Socket';


// const Board = () => {
//     const ranks = Array(8).fill().map((x, i) => 8 - i);
//     const files = Array(8).fill().map((x, i) => i + 1);
    
//     const { appState, dispatch } = useAppContext();
//     const position = appState.position[appState.position.length - 1];
    
//     const [winner, setWinner] = useState(null);

//     const getClassName = (i, j) => {
//         let c = 'tile ';
//         c += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light ';
//         if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)) {
//             if (position[i][j]) c += 'attacking';
//             else c += 'highlight';
//         }
//         return c;
//     };

//     useEffect(() => {
//         const checkWinner = () => {
//             for (let row of position) {
//                 if (row.includes('wq')) {
//                     setWinner('White Wins by making Queen!');
//                     return;
//                 }
//                 if (row.includes('bq')) {
//                     setWinner('Black Wins by making Queen!');
//                     return;
//                 }
//             }
//         };
//         checkWinner();
//     }, [position]);

//     // Listening to moves from the server
//     useEffect(() => {
//         socket.on('move-made', (newPosition) => {
//             dispatch({ type: 'NEW_MOVE', payload: { newPosition } });
//         });

//         return () => {
//             socket.off('move-made');
//         };
//     }, [dispatch]);

//     return (
//         <div className="game-container">
//             <div className="Board">
//                 <Rank ranks={ranks} />
//                 <div className="tiles">
//                     {ranks.map((rank, i) =>
//                         files.map((file, j) =>
//                             <div key={file + '-' + rank} className={getClassName(7 - i, j)}></div>
//                         )
//                     )}
//                 </div>
//                 <Pieces />
//                 <Files files={files} />
//             </div>
//             <div className='time'>
//                 <div className="right-timer">
//                     <CountdownTimer side="black" setWinner={setWinner} />
//                 </div>
//                 <div className="left-timer">
//                     <CountdownTimer side="white" setWinner={setWinner} />
//                 </div>
//             </div>
//             {winner && (
//                 <div className="winner-display">
//                     <h1>{winner}</h1>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Board;
