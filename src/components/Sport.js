import React from 'react'
import Centercomponent from './Centercomponent'
import HeaderSport from './HeaderSport'
import Leftsidebar from './Leftsidebar'
import RightsidebarSport from './RightsidebarSport'

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