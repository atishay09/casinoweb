import React from 'react'
import Offerfloat from './Offerfloat'
import PointsMenu from './PointsMenu'
import Upcomingfixture from './Upcomingfixture'

const Header2 = () => {
  return (
    <>
        <div className="top_header header2 top_header_sport d-flex justify-content-between">
            <div className="logo">
            <img
          src="https://i0.wp.com/www.groovytakeon.com/wp-content/uploads/2016/04/HERE.jpg?ssl=1"
          alt="logo"
          className="img-fluid"
        />
            </div>
            <Offerfloat/>
            <Upcomingfixture/>
            <PointsMenu/>
        </div>
    </>
  )
}

export default Header2