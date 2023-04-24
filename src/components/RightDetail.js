import React from 'react'
import IconMenuRight from '../Icons/Menu'
import {  FavoriteBorderOutlined,  PersonOutlineOutlined, ShareOutlined,  VisibilityOutlined,  } from '@mui/icons-material'

function RightDetail() {
  return (
    <div>
        
        <div className='rightSidebar'>
      <div className='menuIconContainer'>
      <div className='menu-icon'>
<IconMenuRight/>
      </div>
      </div>
      <div className='right_ad_content'>
<div className='widget_cont'>
      <div className='widgets'>
      <span>1331</span>
      <span>752</span>
       <span>39</span>
  
    </div>
    <div className='widgets icons'>
    <VisibilityOutlined />
    <FavoriteBorderOutlined/>
    <PersonOutlineOutlined/>
    </div>
    </div>
<div className='signUp_link button'>
<button className='in_G_buttons right'> 
<span>Apply for interview</span></button>
</div>

<div className='headline_pos_req'>
    Salary
</div>
<div className='highlight'>
    $3000 - $5000 / month
</div>
<div className='headline_pos_req'>
    Work type
</div>
<div className='highlight'>
    Remote
</div>
</div>
<div className='footer right'>
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
    </div>
  )
}

export default RightDetail