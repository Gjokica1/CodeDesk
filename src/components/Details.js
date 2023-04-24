import { Avatar } from '@mui/material'
import {   LocationOnOutlined,  VerifiedRounded,   } from '@mui/icons-material'
import React  from 'react'
import IconSearch2Line from '../Icons/icon'


function Details() {
    
   

return (

  <div className='feed'>
    <div className='searchContainer'>
    <div className='search'>
  
  <IconSearch2Line className='search-icon'/>
  <input
        type="search"
        spellcheck="false"
        placeholder='Search Codedesk'
      />
      </div>
      <div>
      
      </div>
    </div>
     
    <div className='post'>
<div className='post__avatar'>
    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'/>
</div>
<div className='post__body'>
  <div className='post__header'>
    <div className='post__headerText'>
      <div className='name_container'>
      <div className='company_name'>
     Google
         <span>
         <VerifiedRounded/>
        </span>
      </div >
        <ul>
          <li>
          2h ago
          </li>

        </ul>
    </div>
   
      <h2 className='job_title'>
        Product Manager
      </h2>
      <div className='job_location'>
        <LocationOnOutlined className='location_icon' fontSize='small' /> San Francisko
      </div>
    </div>
  </div>
  <div className='post_description'>
      <p> We have an open position at the gMail team. Apply now and help us make gMail even better.
         We offer you the change to work on our team of developers that will make big diffrence in the world.
      </p>
    </div>
    <div className='headline_pos_req' >
<p> For this job position it's very important to have the right motivation an to have
    the right skills and experience for the job
   </p>
    </div>
    <div className='pos_req'>
        Position requirements
    </div>
    <div className='headline_pos_req'>
        5+ experience in Javascript
    </div>
    <div className='pos_req'>
        Position benefits
    </div>
    <div className='headline_pos_req'>
        500k yearly salary + stock options
    </div>
</div>
   

    </div>
    
    </div>

);
};


export default Details