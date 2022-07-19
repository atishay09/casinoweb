import React from 'react'
import { useState } from 'react'
import Bettablebody from './Bettablebody'

const Bettable = ({sportname , isLogin,showModal,amt}) => {
  
  return (
    <>
        <div className="bet_table">
            <div className="bet_table_header"  >
                <div className="px-5 game_title col-7">
                <span>{sportname}</span>
                </div>
                <div className='d-flex col-md-5 '>
                <div className="col-md-4 text-center point_table">1</div>
                <div className="col-md-4 text-center point_table">X</div>
                <div className="col-md-4 text-center point_table">2</div>
                </div>
            </div>
            <Bettablebody amt={amt} isLogin={isLogin} showModal={showModal}/>
            <Bettablebody amt={amt} isLogin={isLogin} showModal={showModal}/>
            <Bettablebody amt={amt} isLogin={isLogin} showModal={showModal}/>
            <Bettablebody amt={amt} isLogin={isLogin} showModal={showModal}/>
            <Bettablebody amt={amt} isLogin={isLogin} showModal={showModal}/>

        </div>
    </>
  )
}

export default Bettable