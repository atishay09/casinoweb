import React from 'react'
import Centercomponent from '../Main/Centercomponent'
import HeaderSport from '../Headers/HeaderSport'
import RightsidebarSport from '../Sidebar/RightsidebarSport'
import Leftsidebar from '../Sidebar/Leftsidebar'

const Sport = ({isLogin ,setLogin}) => {
  return (
    <>
    <div className="main_container">
    <Leftsidebar isLogin={isLogin}/>
    <div className="center_component d-flex flex-column">
          <HeaderSport setLogin={setLogin}/>
          <div className="d-flex">
            <Centercomponent isLogin={isLogin}/>
            <RightsidebarSport/>
          </div>
        </div>

    </div>
    </>
  )
}

export default Sport