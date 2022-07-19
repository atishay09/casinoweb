import React from "react";
import Header from "../Headers/Header";
import HeaderSport from "../Headers/HeaderSport";
import Leftsidebar from "../Sidebar/Leftsidebar";
import Rightsidebar from "../Sidebar/Rightsidebar";
import Sportdetails from "./Sportdetails";
import Betslip from '../Betting/Betslip';
import "./sportgame.css";

const Sportgame = ({ showModal, isLogin, setLogin }) => {
  return (
    <>
      {isLogin ? (
        <div className="main_container">
          <Leftsidebar isLogin={isLogin} />
          <div className="center_component d-flex flex-column">
            <HeaderSport setLogin={setLogin} />
            <div className="d-flex">
              <Sportdetails />
              <div>
                <h5 className='mx-3 mt-3'>
                  Betslip
                </h5>
              <Betslip />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="center_component d-flex flex-column">
            <Header showModal={showModal} isLogin={isLogin} />
            <div className="d-flex main_right_component">
              <Sportdetails />
              <Rightsidebar showModal={showModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sportgame;
