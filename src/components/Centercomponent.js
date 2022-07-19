import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import Carousel from 'react-bootstrap/Carousel';

import React, { useState } from "react";
import Bettable from "./Bettable";
import Footer from "./smallcomp/Footer";

const Centercomponent = ({ isLogin, showModal }) => {
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
    <div className="main_center_component col-10">
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
      <Carousel.Item interval={1000}>
      <img
              src="https://www.bing.com/th?id=OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6&w=170&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src="https://www.bing.com/th?id=OIP.bsiOKGlFjV2aa8z-Iz1PpQHaEK&w=172&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src="https://www.bing.com/th?id=OIP.oun_JdJAfeVDKkjdv_X4rgHaE8&w=142&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src="https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=127&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src="https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=127&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
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
        isLogin={isLogin}
        showModal={showModal}
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
