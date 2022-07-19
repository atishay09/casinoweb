import React from "react";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Link } from "react-router-dom";


const Gameslist = () => {
  
  return (
    <>
      <div className="main-head">
        {/* <div className='main-heading'>
    {
      show?<h6 style={{'backgroundColor' : '#282c34','color':'#868b94'}} onClick={dispAns} ><i className="fa fa-futbol-o mx-2" aria-hidden="true"></i>{props.name}</h6>:<h6 onClick={dispAns} ><i className="fa fa-futbol-o mx-2" aria-hidden="true"></i>{props.name}</h6>
    }
        <h6 className="game_name" onClick={dispAns} >
        <i className="fa fa-futbol-o" aria-hidden="true"></i> Football </h6>
        
    </div>
    {show && <p>football 1</p>} */}

        <div className="accordion accordion-flush" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              ><SportsCricketIcon style={{'color':"red"}}/>
                <h6>Cricket</h6>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="sidebar_item">
                  <h6>
                    <Link to={`/sport/details/1`}>Cricket</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  <h6>
                  <Link to={`/sport/details/1`}>Cricket</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  <h6>
                  <Link to={`/sport/details/1`}>Cricket</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <SportsSoccerIcon style={{'color':"blue"}}/>
                <h6>Football</h6>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Football</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Football</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Football</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Football</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <SportsTennisIcon style={{'color':"violet"}}/>
                <h6>Tennis</h6>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
                <div className="sidebar_item">
                  
                  <h6>
                  <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameslist;
