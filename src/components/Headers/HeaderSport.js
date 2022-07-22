import React from 'react'
import Offerfloat from './Offerfloat'
import PointsMenu from './PointsMenu'
import Upcomingfixture from './Upcomingfixture'

const HeaderSport = () =>
{
  return (
    <>
    <div className="top_header top_header_sport d-flex justify-content-between d-none-1200">
        <Offerfloat/>
        <Upcomingfixture/>
      <PointsMenu />
    </div>
    <div className="top_header top_header_sport d-flex justify-content-between d-flex-1200">
    <div className="d-flex">
        <Offerfloat/>
        <Upcomingfixture/>
        </div>
      <PointsMenu />
    </div>
    </>
  )
}

export default HeaderSport