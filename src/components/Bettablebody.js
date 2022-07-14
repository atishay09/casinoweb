import React from 'react'
import { useState } from 'react';
import BettingModal from './BettingModal';

const Bettablebody = ({isLogin , showModal}) => {
    const [show, setShow] = useState(false);
    const betbtnClicked = () =>{
        if(!isLogin){
            console.log(isLogin)
            showModal()
        }
        else{
            setShow(true)
        }
    }
  return (
    <>
    <BettingModal show={show} setShow={setShow}/>
        <div className="bet_table_body">
                <div className="bet_table_box">
                    <div className="bet_table_row">
                        <div className="game_title col-md-7">
                            <div className="game_date">
                              <div className="game_date">
                                <p className="day text-left">Today</p>
                                <p className="mb-0 day text-left">19:15</p>
                              </div>

                            </div>
                            <div className="game_name d-inline-block">
                                <a href="#">
                                    <p className='team_name text-left'>Sri Lanka women v Indian women</p>
                                    <p className='team_name text-left team_event'>(Womens one day internationals)</p>
                                </a>

                            </div>
                            <div className="game_icons">
                                <div className="game_icon">
                                    <span>F1</span>
                                </div>
                                <div className="game_icon">
                                    <span>F</span>
                                </div>
                                <div className="game_icon">
                                    <span>BM</span>
                                </div>
                                <div className="game_icon">
                                    <span>Z</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex betting_table col-md-5'>
                         <div className="point_table col-4">
                            <div onClick={betbtnClicked} className="back b1-box no-odds">
                                <span className='d-block odds'>3.5</span>
                            </div>
                            <div onClick={betbtnClicked} className="lay b1-box no-odds">
                                <span className='d-block odds'>2.6</span>
                            </div>

                         </div>
                         <div className=" point_table col-4">
                            <div onClick={betbtnClicked} className="b1-box no-val">
                                <span className='d-block odds'>-</span>
                            </div>
                            <div onClick={betbtnClicked} className="no-val b1-box">
                                <span className='d-block odds'>-</span>
                            </div>

                         </div>
                         <div className="point_table col-4">
                            <div onClick={betbtnClicked} className="back b1-box no-odds">
                                <span className='d-block odds'>2.1</span>
                            </div>
                            <div onClick={betbtnClicked} className="lay b1-box no-odds">
                                <span className='d-block odds'>5.2</span>
                            </div>

                         </div>
                         </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Bettablebody