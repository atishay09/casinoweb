import React from "react";
import { Link } from "react-router-dom";
import contextvalue from '../Context/context'
import { useContext } from "react";

const PointsMenu = () =>
{
  const context = useContext(contextvalue);
  const { setLogin, setchangepswdmodal } = context;
  return (
    <>
      <div className="float-right sport_header_right">
        <span className="balance">Pts:</span>
        <span className="myblance">
          <span className="balance_value1">10</span>
          <span className="balance_value">100</span>
        </span>
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
                <Link to="/bonus" className="dropdown-item">
                  Bonus
                </Link>
              </li>
              <li>
                <Link to="/report/accountstatement" className="dropdown-item">
                  Account Statement
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/report/currentbets" className=" dropdown-item">
                  Current Bets
                </Link>{" "}
              </li>
              <li>
                <Link to="/report/activity" className=" dropdown-item">
                  Activity Log
                </Link>{" "}
              </li>
              <li>
                <p onClick={() => { setchangepswdmodal(true) }} className=" dropdown-item">
                  Change Password
                </p>
              </li>
              {/* <li>
                <Link to="/sport" className=" dropdown-item">
                  Security Auth Verification
                </Link>
              </li> */}
              <div className="logout-seperator"></div>
              <li>
                <p
                  onClick={() =>
                  {
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
