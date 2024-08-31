// import React from 'react';

// import av from './assets/img/av2.gif'
// import './Home.css'
// import Button from './Button';

// import {  Link } from "react-router-dom"
// import Instruction from './Instruction';
// import queen from './assets/img/Queen.png'



// function Home() {
 

//   return (
//     <div className="homepage">
      
//       <div className="crown">
      
//       <h2> <img src={queen} alt="" className="q-ph"/><span>C</span>rowned <span>Q</span>uest</h2>
//     <h4 className='text'>Hello  </h4>
//       </div>
     
//       <div className='container'>
//          <div className='avatar'> 
//          <img src={av} className="img" alt="Main" />
//          <div className="content">
//          {/* <div className='name a1'>{location.state.username}</div>
//          <div className='roll a1'>{location.state.roll_No}</div> */}
//          </div>
//          </div>
//          <div className='Button'>
//          <Link to="/Game">
//          <Button/>
//          </Link>
//          </div>
//          <Instruction/>
//       </div>
    
    


//     </div>
//   );
// }

// export default Home;











// import React from 'react';

// import av from './assets/img/av2.gif'
// import './Home.css'
// import Button from './Button';

// import { Link } from "react-router-dom"
// // import Instruction from './Instruction';
// import queen from './assets/img/Queen.png'



// function Home() {
//   // const location = useLocation();

//   return (
//     <div className="homepage">
//       <div className="crown">
//         <h2> <img src={queen} alt="" className="q-ph" /><span>C</span>rowned <span>Q</span>uest</h2>
//         {/* <h4 className='text'>Hello {location.state.username} </h4> */}
//       </div>
//       <div className='container'>
//         <div className='avatar'>
//           <img src={av} className="img" alt="Main" />
//           {/* <div className="content">
//             <div className='name a1'>{location.state.username}</div>
//             <div className='roll a1'>{location.state.roll_No}</div>
//           </div> */}
//         </div>
//         <div className='Button'>
//           <Link to="/Game">
//             <Button />
//           </Link>
//         </div>
//         {/* <Instruction/> */}
//       </div>
//     </div>
//   );
// }

// export default Home;













import React from 'react';
import av from './assets/img/av2.gif'
import './Home.css'
import Button from './Button';

import { Link } from "react-router-dom"
import queen from './assets/img/Queen.png'



function Home() {

  return (
    <>
      <div className="background"></div>
      <div className="homepage">
        <div className="crown">
          <h2> <img src={queen} alt="" className="q-ph" /><span>C</span>rowned <span>Q</span>uest</h2>
          {/* <h4 className='text'>Hello {location.state.username} </h4> */}
        </div>
        <div className='container'>
          <div className='avatar'>
            <img src={av} className="img" alt="Main" />
            {/* <div className="content">
            <div className='name a1'>{location.state.username}</div>
            <div className='roll a1'>{location.state.roll_No}</div>
          </div> */}
          </div>
          <div className='Button'>
            <Link to="/Game">
              <Button />
            </Link>
          </div>
          {/* <Instruction/> */}
        </div>
      </div>
    </>
  );
}

export default Home;