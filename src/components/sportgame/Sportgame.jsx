import React from "react";
import Header from "../Headers/Header";
import HeaderSport from "../Headers/HeaderSport";
import Leftsidebar from "../Sidebar/Leftsidebar";
import Rightsidebar from "../Sidebar/Rightsidebar";
import Sportdetails from "./Sportdetails";
import Betslip from "../Betting/Betslip";
import "./sportgame.css";
import contextvalue from "../Context/context";
import { useContext } from "react";

const Sportgame = () => {
  const context = useContext(contextvalue);
  const { isLogin } = context;
  return (
    <>
      {isLogin ? (
        <div className="main_container">
          <Leftsidebar />
          <div className="center_component d-flex flex-column">
            <HeaderSport />
            <div className="d-flex res_bet">
              <Sportdetails />
              <div>
                <h5 className="mx-3 mt-3">Betslip</h5>
                <Betslip />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="center_component d-flex flex-column">
            <Header />
            <div className="d-flex main_right_component">
              <Sportdetails />
              <Rightsidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sportgame;
