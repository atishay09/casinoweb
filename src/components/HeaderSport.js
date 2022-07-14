import React from 'react'

const HeaderSport = ({isLogin,setLogin}) => {
  return (
    <>
    <div className="top_header top_header_sport d-flex justify-content-between">
    <div className="floating">
        <div>
          <div className="text-center">
          <marquee>

            Hurry up avail the amazing speacial bonus of 12% upto 1200. Don't
            miss out
          </marquee>
          </div>
          </div>
          <div>
            <img src="https://sitethemedata.com/v69/static/front/img/icons/speaker.svg" alt="" />
          </div>
        </div>
        <div className="upcoming-fixture_sport">
        <div className="menu_title_sport">Upcoming Fixtures</div>
        <div className="hooper-vertical_sport">
          <div className="center">
            <div className="carousel_vertical_sport">
              <div className="change_outer_sports">
                <div className="change_inner">
                  <div className="element">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="element">
                    <i className="fas fa-dove"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-kiwi-bird"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-dragon"></i>
                  </div>
                  <div className="element">
                    <i className="fas fa-meteor"></i>
                  </div>
                  <div className="element">hi</div>
                  <div className="element">bye</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-right sport_header_right">
        <span className="balance">Pts: </span>
        <span className="balance_value">0</span>
        <span className="balance_value"> | 0</span>
        <div data-toggle="collapse" data-target="#user-dropdown" className="username-info d-none-mobile collapsed" aria-expanded="false">
        <span className="user-icon">
        <img src="https://sitethemedata.com/v71/static/front/img/user.svg"/>
        </span> 
        <span className="username">Foo</span> 

        <div className="btn-group dropstart">
  <a type="button" className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg"/> 
  </a>
  <ul className="dropdown-menu">
    <li><a href="/bonus" className="dropdown-item">Bonus</a></li>
    <li><a href="/report/accountstatement" className="dropdown-item">Account Statement</a> </li>
    <li> <a href="/report/currentbets" className=" dropdown-item">Current Bets</a> </li>
    <li><a href="/report/activity" className=" dropdown-item">Activity Log</a> </li>
    <li><a href="/report/casinoresult" className=" dropdown-item">Casino Results</a> </li>
    <li><a href="/report/livecasinoresult" className=" dropdown-item">Live Casino Bets</a> </li>
    <li><a href="#" className=" dropdown-item">Set Button Value</a></li>
    <li><a href="#" className=" dropdown-item">Change Password</a></li>
    <li><a href="/settings/secureauth" className=" dropdown-item">Security Auth Verification</a></li>
    <div className="login-seperator dropdown-item"></div> 
    <li><p onClick={()=>{setLogin(false)}} className=" dropdown-item">Logout</p></li>
  </ul>
</div>
        </div>

        
      </div>
        </div>
    </>
  )
}

export default HeaderSport