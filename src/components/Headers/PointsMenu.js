import React from "react";
import contextvalue from '../Context/context'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PointsMenu = () =>
{
  const navigate = useNavigate();
  const context = useContext(contextvalue);
  const {setLogin,setchangepswdmodal,togglesidebar,setdepOpen} = context;
  return (
    <div className="d-flex justify-content-between">
    <div>
    <button className="btn toggle-sidebar-btn" onClick={togglesidebar}>
            <i className="fa-solid fa-bars"></i>
          </button>
    </div>
      <div className="float-right d-flex flex-wrap sport_header_right">
      <div>
        <span className="balance">Pts:</span>
        <span className="myblance">
          <span className="balance_value1">10</span>
          <span>&nbsp;|&nbsp;</span>
          <span className="balance_value">100</span>
        </span>
        </div>
        <div>
        <div
          data-bs-toggle="collapse"
          data-bs-target="#user-dropdown"
          className="username-info d-none-mobile collapsed"
          aria-expanded="false"
        >
          <span className="user-icon">
            <img src="https://sitethemedata.com/v71/static/front/img/user.svg" />
          </span>
          <span className="username">Atishay</span>

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
            <div className="deposit_withdraw d-flex-1200">
            <div className="m-1">

            
            <button
              onClick={() =>
              {
                setdepOpen(true);
              }}
              className="btn btn-success button "
            >
              Deposit
            </button>
            </div>
            <div className="m-1">
            <button className="btn btn-danger button" onClick={() =>
            {
              navigate('/withdraw-request')
            }}>Withdrawal</button>
            </div>
          </div>
            </li>
              <li>
                <p onClick={()=>{navigate('/bonus')}} className="dropdown-item">
                  Bonus
                </p>
              </li>
              <li>
                <p onClick={()=>{navigate('/report/accountstatement')}} className="dropdown-item">
                  Account Statement
                </p>{" "}
              </li>
              <li>
                {" "}
                <p onClick={()=>{navigate('/report/currentbets')}} className=" dropdown-item">
                  Current Bets
                </p>{" "}
              </li>
              <li>
                <p onClick={()=>{navigate('/report/activity')}} className=" dropdown-item">
                  Activity Log
                </p>{" "}
              </li>
              <li>
                <p onClick={() => { setchangepswdmodal(true) }} className=" dropdown-item">
                  Change Password
                </p>
              </li>
              {/* <li>
                <p to="/sport" className=" dropdown-item">
                  Security Auth Verification
                </p>
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
      </div>
    </div>
  );
};

export default PointsMenu;
