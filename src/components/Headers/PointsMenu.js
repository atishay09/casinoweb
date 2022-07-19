import React from "react";

const PointsMenu = ({setLogin}) => {
  return (
    <>
      <div className="float-right sport_header_right">
        <span className="balance">Pts: </span>
        <span className="balance_value">0</span>
        <span className="balance_value"> | 0</span>
        <div
          data-toggle="collapse"
          data-target="#user-dropdown"
          className="username-info d-none-mobile collapsed"
          aria-expanded="false"
        >
          <span className="user-icon">
            <img src="https://sitethemedata.com/v71/static/front/img/user.svg" />
          </span>
          <span className="username">Foo</span>

          <div className="btn-group dropstart">
            <a
              type="button"
              className=" dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/bonus" className="dropdown-item">
                  Bonus
                </a>
              </li>
              <li>
                <a href="/report/accountstatement" className="dropdown-item">
                  Account Statement
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/report/currentbets" className=" dropdown-item">
                  Current Bets
                </a>{" "}
              </li>
              <li>
                <a href="/report/activity" className=" dropdown-item">
                  Activity Log
                </a>{" "}
              </li>
              <li>
                <a href="/report/casinoresult" className=" dropdown-item">
                  Casino Results
                </a>{" "}
              </li>
              <li>
                <a href="/report/livecasinoresult" className=" dropdown-item">
                  Live Casino Bets
                </a>{" "}
              </li>
              <li>
                <a href="#" className=" dropdown-item">
                  Set Button Value
                </a>
              </li>
              <li>
                <a href="#" className=" dropdown-item">
                  Change Password
                </a>
              </li>
              <li>
                <a href="/settings/secureauth" className=" dropdown-item">
                  Security Auth Verification
                </a>
              </li>
              <div className="login-seperator dropdown-item"></div>
              <li>
                <p
                  onClick={() =>{
                    setLogin(false);
                  }}
                  className=" dropdown-item"
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PointsMenu;
