import React from 'react'
import FilterHome from '../components/FilterHome'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'

function Home() {
  return (
    <div className='app'>
        <FilterHome/>
        <Feed/>
        <RightSidebar/>
    </div>
  )
}

export default Home