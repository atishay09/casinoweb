import React from "react";
import Header from "../Headers/Header";
import Centercomponent from "../Main/Centercomponent";
import Rightsidebar from "../Sidebar/Rightsidebar";

const Home = () => {
  return (
    <>
      <div className="main_container">
        {/* <Leftsidebar isLogin={isLogin}/> */}
        <div className="center_component d-flex flex-column">
          <Header />
          <div className="d-flex main_right_component">
            <Centercomponent />
            <Rightsidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
