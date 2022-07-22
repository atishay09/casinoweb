import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import Carousel from 'react-bootstrap/Carousel';
import contextvalue from '../Context/context'
import { useContext } from "react";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Bettable from "../Betting/Bettable";

const Centercomponent = () => {

  const context = useContext(contextvalue);
  const {isLogin} = context;
  const [sport, setSport] = useState({ sportname: "" });

  const showDetails = (e) => {
    setSport({ sportname: e.target.id });
  };

  // scroll sport tabs
  // var scroll_listl = document.querySelector('.scroll_sport_tabs')
  // var scroll_listr = document.querySelector('.scroll_sport_tabs')
  // const scrolll=()=>{
  //   scroll_listl.scrollBy(350,0)
  // }
  // const scrollr=()=>{
  //   scroll_listr.scrollBy(-350,0)
  // }
  return (
    <div className="main_center_component col-md-9 col-sm-12 col-lg-10">
      {isLogin && (
        <div className="new-event">
          <div className="new-event-item sport4">
            <a
              href="/sport/game/SeK7puKGhm+IDlF%2FzygDVg==/KXiXoAhy4HnXUrrWwmASRA=="
              className=""
            >
              <i className="d-icon icon-4"></i>
              <span className="ml-2" style={{ color: "rgb(248, 249, 250)" }}>
                ENGLAND vs INDIA
              </span>
            </a>
          </div>
        </div>
      )}
      <Carousel className="carousel_images">
      <Carousel.Item interval={1500}>
      <img
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
    </Carousel>
     

      <div className="sport-tabs">
        <div className="main_scroll_div">
          {/* <div onClick={scrolll} className="icon_lr">
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div> */}
          <div className="cover">
            <div className="scroll_sport_tabs">
              <div className="sport_item">
                <p onClick={showDetails} id="cricket">
                  <SportsCricketIcon style={{ color: "red" }} /> Cricket
                </p>
              </div>
              <div className="sport_item">
                <p onClick={showDetails} id="football">
                  <SportsSoccerIcon style={{ color: "blue" }} />
                  Football
                </p>
              </div>
              <div className="sport_item">
                <p onClick={showDetails} id="tennis">
                  <SportsTennisIcon style={{ color: "violet" }} />
                  Tennis
                </p>
              </div>
            </div>
          </div>

          {/* <div onClick={scrollr} className="icon_lr">
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div> */}
        </div>
      </div>
      <Bettable
        sportname={sport.sportname}
        amt='1.5'
      />

      {!isLogin ? (
        <div className="fantasy_games">
          <div className="menu_title my-2">Fantasy Games</div>
          <div className="fantasy_game ">
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {!isLogin ? (
        <div className="fantasy_games">
          <div className="menu_title my-2">Live Casino</div>
          <div className="fantasy_game">
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
            <img
              className="col-2"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer/>
    </div>
  );
};

export default Centercomponent;
