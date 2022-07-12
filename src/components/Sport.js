import React from 'react'
import Centercomponent from './Centercomponent'
import HeaderSport from './HeaderSport'
import Leftsidebar from './Leftsidebar'

const Sport = ({isLogin}) => {
  return (
    <>
    <div className="main_container">
    <Leftsidebar isLogin={isLogin}/>
    <div className="center_component d-flex flex-column">
          <HeaderSport />
          <div className="d-flex">
            <Centercomponent isLogin={isLogin}/>
          </div>
        </div>

    </div>
    </>
  )
}

export default Sport