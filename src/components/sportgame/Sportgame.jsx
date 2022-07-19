import React from "react";
import Header from "../Header";
import "./sportgame.css";

const Sportgame = ({ showModal, isLogin }) => {
  return (
    <>
      <div className="main_container">
        <div className="center_component d-flex flex-column">
          <Header showModal={showModal} isLogin={isLogin} />
          <div className="d-flex main_right_component">
            <div className="sport_detail col-md-10">
              <div className="detail-page-container cricket-detail">
                {" "}
                <div className="game-header d-none-mobile sport4">
                  <span className="game-header-name">
                    Test Matches &gt; Sri Lanka v Pakistan
                  </span>{" "}
                  <span className="game-header-date">16/07/2022 10:00</span>
                </div>{" "}
                <div className="market-4" id="goto-0">
                  <div className="bet-table">
                    <div
                      data-bs-toggle="collapse"
                      data-bs-target="#market0"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="MATCH_ODDS">
                          <a href="#" title="">
                            <img
                              src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg"
                              className="mr-1"
                            />
                          </a>
                          MATCH_ODDS
                        </span>
                      </div>
                    </div>
                    <div
                      id="market0"
                      data-title="open"
                      className="bet-table-body collapse show"
                    >
                      <div className="bet-table-row d-none-mobile">
                        <div className="nation-name">
                          <span className="max-bet">
                            <span title="Max : 1">
                              {" "}
                              Max: <span>1</span>
                            </span>
                          </span>
                        </div>
                        <div className="back bl-title back-title">Back</div>{" "}
                        <div className="lay bl-title lay-title">Lay</div>
                      </div>
                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>Sri Lanka</span>
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box back back2">
                          <span className="d-block odds">1.64</span>
                          <span className="d-block">1.51K</span>
                        </div>
                        <div className="bl-box back back1">
                          <span className="d-block odds">1.65</span>
                          <span className="d-block">1.91K</span>
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">1.66</span>
                          <span className="d-block">4.22K</span>
                        </div>{" "}
                        <div className="bl-box lay lay">
                          <span className="d-block odds">1.67</span>
                          <span className="d-block">4.45K</span>
                        </div>
                        <div className="bl-box lay lay1">
                          <span className="d-block odds">1.68</span>
                          <span className="d-block">5.23K</span>
                        </div>
                        <div className="bl-box lay lay2">
                          <span className="d-block odds">1.69</span>
                          <span className="d-block">1.84K</span>
                        </div>
                      </div>

                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>Pakistan</span>{" "}
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>{" "}
                        <div className="bl-box back back2">
                          <span className="d-block odds">2.8</span>{" "}
                          <span className="d-block">1.42K</span>
                        </div>
                        <div className="bl-box back back1">
                          <span className="d-block odds">2.82</span>{" "}
                          <span className="d-block">1.8K</span>
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">2.84</span>{" "}
                          <span className="d-block">358.59</span>
                        </div>{" "}
                        <div className="bl-box lay lay">
                          <span className="d-block odds">2.86</span>{" "}
                          <span className="d-block">1.1K</span>
                        </div>
                        <div className="bl-box lay lay1">
                          <span className="d-block odds">2.88</span>{" "}
                          <span className="d-block">2.65K</span>
                        </div>
                        <div className="bl-box lay lay2">
                          <span className="d-block odds">2.9</span>{" "}
                          <span className="d-block">726.24</span>
                        </div>
                      </div>

                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>The Draw</span>{" "}
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>{" "}
                        <div className="bl-box back back2">
                          <span className="d-block odds">19</span>{" "}
                          <span className="d-block">237.17</span>
                        </div>
                        <div className="bl-box back back1">
                          <span className="d-block odds">19.5</span>{" "}
                          <span className="d-block">39.1</span>
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">20</span>{" "}
                          <span className="d-block">271.09</span>
                        </div>{" "}
                        <div className="bl-box lay lay">
                          <span className="d-block odds">21</span>{" "}
                          <span className="d-block">24.93</span>
                        </div>
                        <div className="bl-box lay lay1">
                          <span className="d-block odds">22</span>{" "}
                          <span className="d-block">192.56</span>
                        </div>
                        <div className="bl-box lay lay2">
                          <span className="d-block odds">24</span>{" "}
                          <span className="d-block">267.11</span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="market-4" id="goto-1">
                  <div className="bet-table">
                    <div
                      data-bs-toggle="collapse"
                      data-bs-target="#market1"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="Bookmaker">
                          <a href="#" title="">
                            <img
                              src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg"
                              className="mr-1"
                            />
                          </a>
                          Bookmaker
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <div
                      id="market1"
                      data-title="OPEN"
                      className="bet-table-body collapse show"
                    >
                      <div className="bet-table-row d-none-mobile">
                        <div className="nation-name">
                          <span className="max-bet">
                            Min:<span>100</span>Max:<span>1L</span>
                          </span>
                        </div>
                        <div className="back bl-title back-title">Back</div>
                        <div className="lay bl-title lay-title">Lay</div>
                      </div>{" "}
                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>Sri Lanka</span>{" "}
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>{" "}
                        <div className="bl-box back back2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">64</span>{" "}
                          <span className="d-block">1L</span>
                        </div>{" "}
                        <div className="bl-box lay lay">
                          <span className="d-block odds">68</span>{" "}
                          <span className="d-block">1L</span>
                        </div>
                        <div className="bl-box lay lay1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box lay lay2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                      </div>
                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>Pakistan</span>{" "}
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>{" "}
                        <div className="bl-box back back2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">175</span>{" "}
                          <span className="d-block">1L</span>
                        </div>{" "}
                        <div className="bl-box lay lay">
                          <span className="d-block odds">190</span>{" "}
                          <span className="d-block">1L</span>
                        </div>
                        <div className="bl-box lay lay1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box lay lay2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                      </div>
                      <div data-title="ACTIVE" className="bet-table-row">
                        <div className="nation-name d-none-mobile">
                          <p>
                            <span>The Draw</span>{" "}
                            <span className="float-right"></span>
                          </p>{" "}
                          <p className="mb-0"></p>
                        </div>{" "}
                        <div className="bl-box back back2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box back back">
                          <span className="d-block odds">1700</span>{" "}
                          <span className="d-block">50K</span>
                        </div>{" "}
                        <div className="bl-box lay lay no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box lay lay1 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                        <div className="bl-box lay lay2 no-val">
                          <span className="d-block odds">—</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="market-message">
                    England vs India Match Bet Started In Our Exchange
                  </div>
                </div>{" "}
                <div className="market-6" id="goto-2">
                  <div className="bet-table">
                    <div
                      data-bs-toggle="collapse"
                      data-bs-target="#market2"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="Normal">
                          <a href="javascript:void(0)" title="">
                            <img
                              src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg"
                              className="mr-1"
                            />
                          </a>
                          Normal
                        </span>
                      </div>
                    </div>{" "}
                    <div
                      id="market2"
                      data-title="OPEN"
                      className="bet-table-body collapse show container-fluid container-fluid-5"
                    >
                      <div className="row row5 d-none-mobile">
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-row">
                              <div className="nation-name"></div>{" "}
                              <div className="lay bl-title lay-title">No</div>{" "}
                              <div className="back bl-title back-title">Yes</div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-row">
                              <div className="nation-name"></div>{" "}
                              <div className="lay bl-title lay-title">No</div>{" "}
                              <div className="back bl-title back-title">Yes</div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="row row5">
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="market-6" id="goto-3">
                  <div className="bet-table">
                    <div
                      data-bs-toggle="collapse"
                      data-bs-target="#market3"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="meter">
                          <a href="#" title="">
                            <img
                              src="https://sitethemedata.com/v71/static/front/img/arrow-down.svg"
                              className="mr-1"
                            />
                          </a>
                          meter
                        </span>
                      </div>
                    </div>{" "}
                    <div
                      id="market3"
                      data-title="SUSPENDED"
                      className="bet-table-body collapse show container-fluid container-fluid-5"
                    >
                      <div className="row row5 d-none-mobile">
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-row">
                              <div className="nation-name"></div>{" "}
                              <div className="lay bl-title lay-title">No</div>{" "}
                              <div className="back bl-title back-title">
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-row">
                              <div className="nation-name"></div>{" "}
                              <div className="lay bl-title lay-title">No</div>{" "}
                              <div className="back bl-title back-title">
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="row row5">
                      <div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div><div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div><div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div><div className=" col-12 col-md-6">
                          <div className="fancy-tripple">
                            <div className="bet-table-mobile-row d-none-desktop">
                              <div className="bet-table-mobile-team-name">
                                <span>10 over runs ENG(ENG vs SA)adv</span>{" "}
                                <span></span>
                              </div>
                            </div>{" "}
                            <div data-title="" className="bet-table-row">
                              <div className="nation-name d-none-mobile">
                                <p>10 over runs ENG(ENG vs SA)adv</p>{" "}
                                <p className="mb-0"></p>
                              </div>{" "}
                              <div className="bl-box lay">
                                <span className="d-block odds">54</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="bl-box back">
                                <span className="d-block odds">56</span>{" "}
                                <span className="d-block">100</span>
                              </div>{" "}
                              <div className="fancy-min-max">
                                <span>Min:<span>100</span></span> 
                                <span>Max:<span>50K</span></span>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="sport_detail_bid col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sportgame;
