import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login2form from "./components/modals/Login2form";
import Registeruser from "./components/modals/Registeruser";
import Sport from "./components/Sport/Sport";
import Casino from "./components/Casino/Casino";
import Slot from "./components/Slot/Slot";
import Fantasy from "./components/Fantasy/Fantasy";
import Withdrawmoney from "./components/Withdrawal/Withdrawmoney";
import Sportgame from "./components/sportgame/Sportgame";
import Bonus from "./components/HeaderDropdown/Bonus";
import Accountstatement from "./components/HeaderDropdown/Accountstatement";
import Activitylog from "./components/HeaderDropdown/Activitylog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [isdepOpen, setdepOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <BrowserRouter>
        <Login2form setIsOpen={setIsOpen} isOpen={isOpen} setLogin={setLogin} />
        <Registeruser />
        <Navbar isLogin={isLogin} showModal={showModal} isdepOpen={isdepOpen} setdepOpen={setdepOpen} />
        <Routes>
          <Route path="/" element={<Home isLogin={isLogin} showModal={showModal} />} />

          <Route exact path="/sport" element={<Sport isLogin={isLogin} setLogin={setLogin}/>} />

          <Route exact path="/casino" element={<Casino />} />

          <Route exact path="/slot" element={<Slot />} />

          <Route exact path="/fantasy" element={<Fantasy />} />

          <Route exact path="/withdraw-request" element={<Withdrawmoney />} />

          <Route exact path="/sport/details/:id" element={<Sportgame isLogin={isLogin} showModal={showModal} setLogin={setLogin}/>}/>

          <Route exact path="/bonus" element={<Bonus isLogin={isLogin} setLogin={setLogin}/>}/>

          <Route exact path="/report/accountstatement" element={<Accountstatement />}/>

          <Route exact path="/report/currentbets" element={<Bonus isLogin={isLogin} setLogin={setLogin}/>}/>
          
          <Route exact path="/report/activity" element={<Activitylog />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
