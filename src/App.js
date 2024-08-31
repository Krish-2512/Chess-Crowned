

// import React, { useReducer } from 'react';
// import './App.css'; // Import your main CSS file
// import Board from './components/Board/Board';
// import { initGameState } from './constant';
// import { reducer } from './reducer/reducer';
// import AppContext from './context/Context';


// function App() {
//   const [appState, dispatch] = useReducer(reducer, initGameState);

//   const providerState = {
//     appState,
//     dispatch,
//   };
//   // const {turn}=appState;

//   return (
//     <AppContext.Provider value={providerState}>
//       <div className="App">
//         <Board />
//       </div>
//     </AppContext.Provider>
//   );
// }

// export default App;







import React, { useReducer } from 'react';
import './App.css'; // Import your main CSS file
import Board from './components/Board/Board';
import { initGameState } from './constant';
import { reducer } from './reducer/reducer';
import AppContext from './context/Context';

import Home from './components/Chesslogin/Chome';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };


  return (
   
    <AppContext.Provider value={providerState}>
  

    <Router>
      <Routes>
     {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/Game" element={<Board/>}/>
      </Routes>
    </Router>
  </AppContext.Provider>
  );
}

export default App;