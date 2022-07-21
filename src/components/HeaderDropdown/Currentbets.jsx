import React from "react";

const Currentbets = () => {
  return (
    <>
      <div className="main_container">
        <Leftsidebar />
        <div className="center_component d-flex flex-column">
          <HeaderSport />
          <div className="d-flex">
            <div className="container-fluid bonus_page">
              <div className="d-flex mt-3 info">
                <h3 className="mx-2">Current Bets</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currentbets;
