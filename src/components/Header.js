import React from "react";

const Header = ({showModal ,isLogin}) => {
  return (
    <>
      <div className="top_header d-flex justify-content-between">
        <div className="floating">
        <div>
          <div className="text-center">
          <marquee>

            Hurry up avail the amazing speacial bonus of 12% upto 1200. Don't
            miss out
          </marquee>
          </div>
          </div>
          <div>
            <img src="https://sitethemedata.com/v69/static/front/img/icons/speaker.svg" alt="" />
          </div>
        </div>
        <div className="login_form d-flex justify-content-between">
        <div>
        </div>
        <div>
          <button type="button" className="btn button btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#registerusermodal">
            Register
          </button>
          <button type="button" className="btn button btn-warning mx-2" onClick={showModal}>
            Login
          </button>
          </div>
          
          {/* <div className="input_username d-flex mx-1">
            <input
              type="text"
              className="form-control "
              placeholder="Username"
              id="username"
              name="username"
              onChange={onChange}
              value={credentials.username}
              aria-describedby="emailHelp"
            />
            <a href="#">Forgot Password?</a>
          </div>
          <div className="input_password d-flex mx-1">
            <input
              type="password"
              className="form-control "
              placeholder="Password"
              id="password"
              name="password"
              onChange={onChange}
              value={credentials.password}
              aria-describedby="emailHelp"
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                className="form-check-label mx-1"
                htmlFor="flexCheckChecked"
              >
                Checked checkbox
              </label>
              
              <span
                className="d-inline-block"
                tabIndex="0"
                data-bs-toggle="tooltip"
                title="I am at least 18 years of age and I have read, accept and agree to the Terms and Conditions , Responsible Gaming , GamCare, Gambling Therapy"
              >
                <p className="info-button" type="button">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                </p>
              </span>
            </div>
          </div> */}
         
        </div>
      </div>
    </>
  );
};

export default Header;
