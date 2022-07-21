import React from "react";
import contextvalue from '../Context/context'
import { useContext } from "react";

const Rightsidebar = () => {

  const context = useContext(contextvalue);
  const {setloginmodal} = context;
  
  return (
    <div className="col-2 right_side_bar">
      <div className="menu_title winner_lists">
        <p>Winner Announcement</p>
      </div>
      <div className="winner_list">
        <div className="winners">
          <div className="wrapper">
            <div className="carousel_vertical2">
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">spouting whale</p>
                  <p>Unicode: U+1F433</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">whale</p>
                  <p>Unicode: U+1F40B</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">dolphin</p>
                  <p>Unicode: U+1F42C</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">fish</p>
                  <p>Unicode: U+1F41F</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">tropical fish</p>
                  <p>Unicode: U+1F420</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">blowfish</p>
                  <p>Unicode: U+1F421</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">shark</p>
                  <p>Unicode: U+1F988</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">octopus</p>
                  <p>Unicode: U+1F419</p>
                </div>
              </div>
              <div className="carousel__item">
                <div className="carousel__item-body">
                  <p className="title">spiral shell</p>
                  <p>Unicode: U+1F41A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightsidebar_responsive">
        <div className="proud_partners mt-2">
          <div className="menu_title">
            <p>Proud Partners</p>
          </div>
          <div className="partner_image">
            <img
              onClick={()=>{setloginmodal(true)}}
              className="col-md-12"
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
          </div>
        </div>

        <div className="new_launched mt-2">
          <div className="menu_title">
            <p>New Launched</p>
          </div>
          <div className="launched_images">
            <div id="slider">
              <figure onClick={()=>{setloginmodal(true)}}>
                <img
                  src="https://sitethemedata.com/casino_icons/other/diam11.png"
                  alt="..."
                />
                <img
                  src="https://sitethemedata.com/casino_icons/other/diam11.png"
                  alt="..."
                />
                <img
                  src="https://sitethemedata.com/casino_icons/other/diam11.png"
                  alt="..."
                />
                <img
                  src="https://sitethemedata.com/casino_icons/other/diam11.png"
                  alt="..."
                />
                <img
                  src="https://sitethemedata.com/casino_icons/other/diam11.png"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="our_casino mt-2">
          <div className="menu_title">
            <p>Our Casino</p>
          </div>
          <div className="ourcasino_images">
            <img
              className="col-md-12"
              onClick={()=>{setloginmodal(true)}}
              src="https://sitethemedata.com/casino_icons/other/diam11.png"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="virtual_casino mt-2">
        <div className="menu_title">
          <p>Our Virtual Casino</p>
        </div>
        <div className="virtual_casino_image">
          <div id="slider">
            <figure onClick={()=>{setloginmodal(true)}}>
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
            </figure>
          </div>
          <div id="slider">
            <figure onClick={()=>{setloginmodal(true)}}>
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
            </figure>
          </div>
          <div id="slider">
            <figure onClick={()=>{setloginmodal(true)}}>
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
            </figure>
          </div>
          <div id="slider">
            <figure onClick={()=>{setloginmodal(true)}}>
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
              <img
                src="https://sitethemedata.com/casino_icons/other/diam11.png"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
