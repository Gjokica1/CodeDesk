import React from 'react'
import IconCodeSlash from '../Icons/Codeslashicon'
import IconHome_alt from '../Icons/homeicon'
import IconCloudServer from '../Icons/IconCloud'
import IconPencilRuler from '../Icons/Pencilicon'
import IconPeopleRoof from '../Icons/Product'
import IconClipboardTextClockOutline from '../Icons/Testingicon'
import SidebarOption from './SidebarOption'



function FilterHome() {
  return (
    
    <aside class="sidebar">
      
      <div className='logo'>
      Codedesk
      <span class="badge">TM</span>
      </div>
      <div className='icon_container'>
      <SidebarOption active Icon={IconHome_alt} text="Home"/>
      <SidebarOption Icon={IconCodeSlash} text="Software development"/>
      <SidebarOption Icon={IconClipboardTextClockOutline} text="Software testing"/>
      <SidebarOption Icon={IconCloudServer} text="DevOps"/>
      <SidebarOption Icon={IconPencilRuler} text="Design,UX,UI"/>
      <SidebarOption Icon={IconPeopleRoof} text="Product management"/>
      </div>
      
    </aside>
  

   
  )
}

export default FilterHome