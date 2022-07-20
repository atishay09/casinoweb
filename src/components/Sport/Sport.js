import React from 'react'
import Centercomponent from '../Main/Centercomponent'
import HeaderSport from '../Headers/HeaderSport'
import RightsidebarSport from '../Sidebar/RightsidebarSport'
import Leftsidebar from '../Sidebar/Leftsidebar'

const Sport = () => {
  return (
    <>
    <div className="main_container">
    <Leftsidebar />
    <div className="center_component d-flex flex-column">
          <HeaderSport />
          <div className="d-flex">
            <Centercomponent />
            <RightsidebarSport/>
          </div>
        </div>

    </div>
    </>
  )
}

export default Sport