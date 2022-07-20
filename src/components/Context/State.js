import React, { useState } from 'react'
import Context from './context';

const State = (props) => {
    const [page,setPage] = useState('home');

  return (
    <Context.Provider value={{page,setPage}}>
        {props.children}
    </Context.Provider>
  )
}

export default State;