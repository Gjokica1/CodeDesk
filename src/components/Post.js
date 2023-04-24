import {  FavoriteBorderOutlined, LocationOnOutlined, PersonOutlineOutlined, ShareOutlined, Style, VerifiedRounded, VisibilityOutlined,  } from '@mui/icons-material'
import { Avatar } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Post({displayName, verified, position, location, text, avatar}) {
  return (
    <div>
      
    <div className='post'>
<div className='post__avatar'>
    <Avatar src={avatar}/>
</div>
<div className='post__body'>
  <div className='post__header'>
    <div className='post__headerText'>
      <div className='name_container'>
      <div className='company_name'>
     {displayName}
         <span>
         {verified && <VerifiedRounded/>}
        </span>
      </div >
        <ul>
          <li>
          2h ago
          </li>

        </ul>
    </div>
   <NavLink to={`adpage`} style={{ textDecoration: 'none' }} >
    
      <h2 className='job_title' >
        {position}
      </h2>
      
      </NavLink>
      <div className='job_location'>
        <LocationOnOutlined className='location_icon' fontSize='small' /> {location}
      </div>
    </div>
  </div>
  <div className='post_description'>
      <p> {text}
      </p>
    </div>
    <div className='post__footer'>
     <VisibilityOutlined /> <span>1331</span>
      <FavoriteBorderOutlined/> <span>752</span>
      <PersonOutlineOutlined/> <span>39</span>
      <ShareOutlined/> <span>17</span>
    </div>
</div>
   
    </div>
    </div>
  )
}

export default Post
