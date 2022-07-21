import React, { useState } from 'react'
import Context from './context';

const State = (props) => {
    const [isLogin,setLogin] = useState(true);
    const [isloginmodal ,setloginmodal] = useState(false)
    const [changepswdmodal, setchangepswdmodal] = useState(false)

  return (
    <Context.Provider value={{isLogin,setLogin,isloginmodal ,setloginmodal,changepswdmodal, setchangepswdmodal}}>
        {props.children}
    </Context.Provider>
  )
}

export default State;