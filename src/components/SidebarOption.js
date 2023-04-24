import React from 'react'

function SidebarOption({active,Icon,text}) {
  return (
    <div className={`SidebarOption ${active && 
    'SidebarOption--active'}`}>
        <Icon className='Icons'/>
        <p className='text'>{text}</p>
        </div>
  )
}

export default SidebarOption;