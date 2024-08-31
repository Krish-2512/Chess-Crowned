



// import React, { useState, useEffect, useRef } from 'react';
// import { useAppContext } from '../../context/Context';
// import './CountTimer.css';

// const CountdownTimer = ({ side, setWinner }) => {
//   const [whiteTime, setWhiteTime] = useState(15 * 60); // 15 minutes in seconds for white
//   const [blackTime, setBlackTime] = useState(15 * 60); // 15 minutes in seconds for black
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   const { appState } = useAppContext();
//   const { turn } = appState;

//   useEffect(() => {
//     clearInterval(timerRef.current);

//     if (isRunning) {
//       if (turn === 'w') {
//         timerRef.current = setInterval(() => {
//           setWhiteTime(prevTime => {
//             if (prevTime > 0) return prevTime - 1;
//             setWinner('Black Wins by Time!');
//             clearInterval(timerRef.current);
//             return 0;
//           });
//         }, 1000);
//       } else {
//         timerRef.current = setInterval(() => {
//           setBlackTime(prevTime => {
//             if (prevTime > 0) return prevTime - 1;
//             setWinner('White Wins by Time!');
//             clearInterval(timerRef.current);
//             return 0;
//           });
//         }, 1000);
//       }
//     }

//     return () => clearInterval(timerRef.current);
//   }, [turn, isRunning, setWinner]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   return (
//     <div className={`countdown_timers ${side}`}>
//       {side === 'white' ? (
//         <div className={`white-timer ${turn === 'w' ? 'active' : ''}`}>
//           <h1 className="white">White: <span>{formatTime(whiteTime)}</span></h1>
//         </div>
//       ) : (
//         <div className={`black-timer ${turn === 'b' ? 'active' : ''}`}>
//           <h1 className="black">Black: <span>{formatTime(blackTime)}</span></h1>
//         </div>
//       )}
//       {!isRunning && <button className="start-button" onClick={handleStart}>Start</button>}
//     </div>
//   );
// };

// export default CountdownTimer;

















import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/Context';
import './CountTimer.css';

const CountdownTimer = ({ side, setWinner }) => {
  const [whiteTime, setWhiteTime] = useState(15 * 60); 
  const [blackTime, setBlackTime] = useState(15 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [hasWhiteMoved, setHasWhiteMoved] = useState(false); // Track if white has moved
  const timerRef = useRef(null);

  const { appState } = useAppContext();
  let { turn } = appState;
  
  
  useEffect(() => {
    clearInterval(timerRef.current);

    if ( turn === 'w') {
      // setHasWhiteMoved(true); 
      setIsRunning(true); 
    }

    

    if (isRunning) {
      if (turn === 'w') {
        timerRef.current = setInterval(() => {
          setWhiteTime(prevTime => {
            if (prevTime > 0) return prevTime - 1;
            setWinner('Black Wins by Time!');
            clearInterval(timerRef.current);
            return 0;
          });
        }, 1000);
      } else {
        timerRef.current = setInterval(() => {
          setBlackTime(prevTime => {
            if (prevTime > 0) return prevTime - 1;
            setWinner('White Wins by Time!');
            clearInterval(timerRef.current);
            return 0;
          });
        }, 1000);
      }
    }

    return () => clearInterval(timerRef.current);
  }, [turn, isRunning, setWinner, hasWhiteMoved]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
   
    <div className={`countdown_timers ${side}`} >
      {side === 'white' ? (
        <div className={`white-timer ${turn === 'w' ? 'active' : ''}`}>
          <h1 className="white">White: <span>{formatTime(whiteTime)}</span></h1>
        </div>
      ) : (
        <div className={`black-timer ${turn === 'b' ? 'active' : ''}`}>
          <h1 className="black">Black: <span>{formatTime(blackTime)}</span></h1>
        </div>
      )}
    </div>
   
  );
};

export default CountdownTimer;
