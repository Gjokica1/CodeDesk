import React from 'react'
import FilterHome from '../components/FilterHome'
import Details from '../components/Details'
import RightDetail from '../components/RightDetail'

function adPage() {
  return (
    <div className='adPage_container'>
       <FilterHome/>
       <Details/>
       <RightDetail/>
    </div>
  )
}

export default adPage