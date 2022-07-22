import React, { useState } from 'react'
import Context from './context';

const State = (props) => {
    const [isLogin,setLogin] = useState(true);
    const [isloginmodal ,setloginmodal] = useState(false)
    const [changepswdmodal, setchangepswdmodal] = useState(false)
    const [toggle,settoggle] = useState(false)
  const togglesidebar = ()=>{
    settoggle(!toggle)
  }

  return (
    <Context.Provider value={{isLogin,setLogin,isloginmodal ,setloginmodal,changepswdmodal, setchangepswdmodal,togglesidebar,toggle}}>
        {props.children}
    </Context.Provider>
  )
}

export default State;