import React, { useState } from "react";
import Bettable from "./Bettable";



const Centercomponent = ({isLogin , showModal}) => {
  const [sport,setSport] = useState({sportname:""})
  const showDetails = (e)=>{
    setSport({sportname:e.target.id})
  }
  
  // scroll sport tabs
  var scroll_listl = document.querySelector('.scroll_sport_tabs')
  var scroll_listr = document.querySelector('.scroll_sport_tabs')
  const scrolll=()=>{
    scroll_listl.scrollBy(350,0)
  }
  const scrollr=()=>{
    scroll_listr.scrollBy(-350,0)
  }
  return (
    <div className="main_center_component col-10">
      <div
        id="carouselExampleControls"
        className="carousel carousel_cmop slide"
        data-ride="carousel"
        data-bs-interval='2000'
      >
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img
              src="https://www.bing.com/th?id=OIP.bsiOKGlFjV2aa8z-Iz1PpQHaEK&w=172&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bing.com/th?id=OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6&w=170&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bing.com/th?id=OIP.oun_JdJAfeVDKkjdv_X4rgHaE8&w=142&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=127&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="sport-tabs">
      <div className="main_scroll_div">
      <div onClick={scrolll} className="icon_lr">
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
        <div className="cover">
          <div className="scroll_sport_tabs">
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='football'>Football</p></div>
          <div className="sport_item"><p onClick={showDetails} id='tennis'>Tennis</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          <div className="sport_item"><p onClick={showDetails} id='cricket'>Cricket</p></div>
          </div>
        </div>
       
      <div onClick={scrollr} className="icon_lr">
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      </div>

      </div>
      <Bettable sportname={sport.sportname} isLogin={isLogin} showModal={showModal}/>

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

      <div className="division"></div>

      <div className="support my-2 ">
        <div className="contacts d-flex flex-column">
          <div className="w-100 text-center">
            <b>24X7 Support</b>
          </div>
          <div className="text-center w-100">
            <span>
              +447377773777 / +447403777777 / +447411114111 / +447380173801
            </span>
          </div>
        </div>
        <div className="social_media">
          <a href="#" target="_blank">
            <img
              src="https://sitethemedata.com/v69/static/front/img/home-banners/social/whatsapp.png"
              alt="..."
            />
          </a>

          <a href="#">
            <img
              src="https://sitethemedata.com/v69/static/front/img/home-banners/social/facebook.png"
              alt="..."
            />
          </a>
          <a href="#">
            <img
              src="https://sitethemedata.com/v69/static/front/img/home-banners/social/instagram.png"
              alt="..."
            />
          </a>
          <a href="#">
            <img
              src="https://sitethemedata.com/v69/static/front/img/home-banners/social/telegram.png"
              alt="..."
            />
          </a>
          <a href="#">
            <img
              src="https://sitethemedata.com/v69/static/front/img/home-banners/social/news.png"
              alt="..."
            />
          </a>
        </div>
        <div className="footer_menu">
            <ul>
                <li>
                    <a href="/_about-us" target="_blank">About Us</a>
                </li>
                <div className="dot"></div>
                <li>
                    <a href="/_terms-and-conditions" target="_blank">Terms and Conditions</a>
                </li>
                <div className="dot"></div>
                <li>
                    <a href="/_responsible-gaming" target="_blank">Responsible Gaming</a>
                </li>
            </ul>
        </div>
        <div className="footer_top d-flex align-items-center justify-content-between mx-5">
            <div className="secure_logo d-flex align-items-center">
                <div>
                    <img src="	https://sitethemedata.com/v69/static/front/img/ssl.png" alt="..." />
                </div>
                <div className="mx-2">
                    <b>100% SAFE</b>
                    <div>Protected Connection and encrypted data.</div>
                </div>
            </div>
            <div className="d-inline-block footer-other">
                <a href="#" role='button'>
                    <img src="https://sitethemedata.com/v69/static/front/img/18plus.png" alt="..." />
                </a>
                <a href="https://www.gamecare.org.uk/" target='_blank'>
                    <img src="	https://sitethemedata.com/v69/static/front/img/gamecare.png" alt="..." />
                </a>
                <a href="https://www.gamelingtherapy.org/en" target='_blank'>
                    <img src="https://sitethemedata.com/v69/static/front/img/gt.png" alt="..." />
                </a>
                <a href="https://validator.antillephone.com/validate?domain=wolf777.com&seal_id=0ef0bc08dfe93fc67e5bd6c6c6a9084baaaf76df971ff53980d18cc2f2fb4a6fe44a4f352eaf559e7f1ea2d3bd2e5b06&stamp=dbe6d608d291e03882e3adcda4c268ec" target='_blank'>
                    <img src="https://750c6d2a-0352-4b88-aaa7-72085659af51.snippet.antillephone.com/sealassets/dbe6d608d291e03882e3adcda4c268ec-wolf777.com-0ef0bc08dfe93fc67e5bd6c6c6a9084baaaf76df971ff53980d18cc2f2fb4a6fe44a4f352eaf559e7f1ea2d3bd2e5b06-c2VhbC5wbmc%3D?status=valid" alt="..." />
                </a>
               
            </div>
        </div>
        <hr className="mx-5" />
        <div className="payment_icons d-flex justify-content-center">
        <div>
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/bhim.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/upi.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/imps.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/paytm.png" alt="..." />
        </div>
        <div>
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/airtel.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/phonepe.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/net-banking.png" alt="..." />
            <img className="col-1" src="https://sitethemedata.com/v69/static/front/img/upi_logos_new/debit-card.png" alt="..." />
        </div>
        </div>
        <div className="desc_footer d-flex mx-5 flex-column text-center mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium illo facere amet sequi perferendis totam inventore aliquid omnis nesciunt et saepe vitae hic, debitis necessitatibus magni doloribus officia voluptatum atque modi porro obcaecati fuga laudantium? Ratione nostrum quaerat, laborum, excepturi quibusdam assumenda et iste magni error vero illo deleniti.</p>
            <p>© Copyright 2022. All Rights Reserved.</p>
        </div>
      </div>

    </div>
  );
};

export default Centercomponent;
