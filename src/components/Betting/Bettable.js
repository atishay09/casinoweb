import React from 'react'
import { useState } from 'react'
import Bettablebody from './Bettablebody'

const Bettable = ({sportname , isLogin,showModal,amt}) => {
  const data = [{id : '1'},{id : '2'},{id : '3'},{id : '4'},{id : '5'},{id : '6'},]
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
            {data.map((ele)=>{
              return(<Bettablebody id={ele.id} key={ele.id} amt={amt} isLogin={isLogin} showModal={showModal}/>)
            })}
            

        </div>
    </>
  )
}

export default Bettable