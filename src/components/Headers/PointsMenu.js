import React from "react";
import { Link } from "react-router-dom";

const PointsMenu = ({ setLogin }) => {
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
                <Link to="/sport" className=" dropdown-item">
                  Casino Results
                </Link>{" "}
              </li>
              <li>
                <Link to="/sport" className=" dropdown-item">
                  Live Casino Bets
                </Link>{" "}
              </li>
              <li>
                <Link to="/sport" className=" dropdown-item">
                  Set Button Value
                </Link>
              </li>
              <li>
                <Link to="/sport" className=" dropdown-item">
                  Change Password
                </Link>
              </li>
              <li>
                <Link to="/sport" className=" dropdown-item">
                  Security Auth Verification
                </Link>
              </li>
              <div className="login-seperator dropdown-item"></div>
              <li>
                <p
                  onClick={() => {
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
