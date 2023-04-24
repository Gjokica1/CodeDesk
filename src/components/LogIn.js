// import React from 'react';

// // import{useState} from 'react';

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function LogIn() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
     

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// function LogIn({isShowLogin}) {
  // const [passwordShown, setPasswordShown] = useState(true);

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
    
    
  // };

//   return (
//     <div className={`${!isShowLogin ? "active" : ""} show`}>
//     <div class="login-card">
//       <h2>Login to Codedesk</h2>
//       <h3>Enter your credentials</h3>
//       <form class="login-form">
//         <input
//           spellcheck="false"
//           class="control"
//           type="text"
//           placeholder="Username"
//         />
//         <div class="password">
//           <input
//             spellcheck="false"
//             class="control"
//             id="password"
//             type= {passwordShown ? "text"  : "password"}
//             placeholder="Password"
//           />
// //           <button
//         className={passwordShown ? 'showing' : ''} onClick = {togglePassword}
//             class="toggle"
//             type="button"
//             onClick={togglePassword } 
//           ></button>
//         </div>
//         <button class="control" type="button">Continue</button>
//         <div className='checkbox'>
//         <input className='container'  type="checkbox" name="yes" value="Remember me?"/>
//   <label for="yes"> Remember me?</label> <span>Forgot password?</span>
//         </div>

//         <div className='plus_info'>
// Not a member yet? <span>Join now</span>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default LogIn;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Login.css';
import './bootstrap.css';




function LogIn(isShowLogin) {

  const [passwordShown, setPasswordShown] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    
    
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  return (
    <>
    
    <button className='sign_in_button' onClick={handleShow} >Sign in </button>

    <div className='modal_container'
    >
      <Modal show={show} onHide={handleClose} 
      // style={{opacity:1}}
      style={{ opacity:1,}}
     
      
      
      >
        
        <Modal.Body
        style={{width:400}}>
        <div className={`${!isShowLogin ? "active" : ""} show`}>
    <div class="login-card">
      
      <form class="login-form">
      <h2>Login to Codedesk</h2>
      {/* <h3>Enter your credentials</h3> */}
        <input
          spellcheck="false"
          class="control"
          type="text"
          placeholder="Username"
        />
        <div class="password">
          <input
            spellcheck="false"
            class="control"
            id="password"
            type= {passwordShown ? "text"  : "password"}
            placeholder="Password"
          />
          <button
        className={passwordShown ? 'showing' : ''} onClick = {togglePassword}
            class="toggle"
            type="button"
             
          ></button>
        </div>
        <button class="control" id='click' type="button">Continue</button>
        <div className='checkbox'>
        <input className='container'  type="checkbox" name="yes" value="Remember me?"/>
  <label for="yes"> Remember me?</label> <span>Forgot password?</span>
        </div>

        <div className='plus_info'>
Not a member yet? <span>Join now</span>
        </div>
      </form>
    </div>
    </div>
        </Modal.Body>
      </Modal>
      </div>

    </>
  );
}

export default LogIn;


