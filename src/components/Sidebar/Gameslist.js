import React from "react";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Link } from "react-router-dom";


const Gameslist = () =>
{

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
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              ><SportsCricketIcon style={{ 'color': "red" }} />
                <h6>Cricket</h6>
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="sub-accordionExample">
                <div class="accordion-item">
                  <h6 class="accordion-header" id="sub-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <Link to={`/sport/details/1`}>Cricket</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="sub-headingOne"
                    data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Cricket </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseTwo" aria-expanded="false" aria-controls="sub-collapseTwo">
                      <Link to={`/sport/details/1`}>Cricket</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="sub-headingTwo" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Cricket </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <Link to={`/sport/details/1`}>Cricket</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseThree" class="accordion-collapse collapse show" aria-labelledby="sub-headingThree" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Cricket </strong>
                    </div>
                  </div>
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
                <SportsSoccerIcon style={{ 'color': "blue" }} />
                <h6>Football</h6>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse "
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" >
                <div class="accordion-item">
                  <h6 class="accordion-header" id="sub-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <Link to={`/sport/details/1`}>Football </Link>
                    </button>
                  </h6>
                  <div id="sub-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="sub-headingOne"
                    data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Football  </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <Link to={`/sport/details/1`}>Football</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="sub-headingTwo" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Football </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <Link to={`/sport/details/1`}>Football </Link>
                    </button>
                  </h6>
                  <div id="sub-collapseThree" class="accordion-collapse collapse show" aria-labelledby="sub-headingThree" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Football  </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <Link to={`/sport/details/1`}>Football </Link>
                    </button>
                  </h6>
                  <div id="sub-collapseFour" class="accordion-collapse collapse show" aria-labelledby="sub-headingFour" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Football  </strong>
                    </div>
                  </div>
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
                <SportsTennisIcon style={{ 'color': "violet" }} />
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
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <Link to={`/sport/details/1`}>Tennis</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseOne" class="accordion-collapse collapse show" aria-labelledby="sub-headingOne" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Tennis </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <Link to={`/sport/details/1`}>Tennis</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="sub-headingTwo" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Tennis </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h6 class="accordion-header" id="sub-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <Link to={`/sport/details/1`}>Tennis</Link>
                    </button>
                  </h6>
                  <div id="sub-collapseThree" class="accordion-collapse collapse show" aria-labelledby="sub-headingThree" data-bs-parent="#sub-accordionExample">
                    <div class="accordion-body">
                      <strong>Tennis </strong>
                    </div>
                  </div>
                </div>
                {/* <div className="sidebar_item">

                  <h6>
                    <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div>
                <div className="sidebar_item">

                  <h6>
                    <Link to={`/sport/details/1`}>Tennis</Link>
                  </h6>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameslist;
