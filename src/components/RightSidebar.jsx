import React from 'react'
import IconLinkedin from '../Icons/linkedin_logo'
import IconMenuRight from '../Icons/Menu'
import { useState } from 'react';
import LogIn from './LogIn';
 


function RightSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='rightSidebar'>
      <div className='menuIconContainer'>
      <div className='menu-icon'>
<IconMenuRight/>
      </div>
      </div>
      <div className='main_content'>
    <div className='statement'>Remote hiring made easy.</div>
<div className='signUp_links'>
<button className='in_G_buttons'> <IconLinkedin  className='icon_logo' />
<span>Sign up with Linkedin</span></button>
<button className='in_G_buttons'> <img className='img_cnt'  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'/>
<span>Sign up with Google</span></button>

<div className='or_cnt'><span>or</span></div>
<button className='phone_button'>Sign up with phone or email 
  
</button> 
<span>
    By signing up, you agree to the 
    Terms of service and Privacy Policy,
    including Cookie Use.</span>
    <div className='has_account'>
  Already have an account?
</div>

{/* <button className='sign_in_button' onClick={handleShow} >Sign in </button> */}
<LogIn/>

</div>
</div>
<div className='footer'>
<div>
&#000000; 2022 Codedesk,Inc.
</div>
<div>
Apply as a developer
</div>
<div>
 Blog
</div>
<div>
Support
</div>
</div>
    </div>
  )
}

export default RightSidebar