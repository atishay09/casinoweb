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
import State from "./components/Context/State";
import Changepassword from "./components/modals/Changepassword";
import Currentbets from "./components/HeaderDropdown/Currentbets";

function App() {
  const [isdepOpen, setdepOpen] = useState(false);

  return (
    <>
      <State>
        <BrowserRouter>
          <Login2form />
          <Registeruser />
          <Changepassword />
          <Navbar isdepOpen={isdepOpen} setdepOpen={setdepOpen} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route exact path="/sport" element={<Sport />} />

            <Route exact path="/casino" element={<Casino />} />

            <Route exact path="/slot" element={<Slot />} />

            <Route exact path="/fantasy" element={<Fantasy />} />

            <Route exact path="/withdraw-request" element={<Withdrawmoney />} />

            <Route exact path="/sport/details/:id" element={<Sportgame />} />

            <Route exact path="/bonus" element={<Bonus />} />

            <Route
              exact
              path="/report/accountstatement"
              element={<Accountstatement />}
            />

            <Route exact path="/report/activity" element={<Activitylog />} />

            <Route exact path="/report/currentbets" element={<Currentbets />} />
          </Routes>
        </BrowserRouter>
      </State>
    </>
  );
}

export default App;
