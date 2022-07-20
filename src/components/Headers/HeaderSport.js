import React from 'react'
import Offerfloat from './Offerfloat'
import PointsMenu from './PointsMenu'
import Upcomingfixture from './Upcomingfixture'

const HeaderSport = () => {
  return (
    <>
    <div className="top_header top_header_sport d-flex justify-content-between">
    <Offerfloat/>
        <Upcomingfixture/>
      <PointsMenu />
        </div>
    </>
  )
}

export default HeaderSport