import React, { useState } from "react";

const Loginform = () => {
  const [newNote, setnewNote] = useState({
    username: "",
    password: "",
  });
  const onChange = (e) => {
    setnewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        className="modal fade"
        id="loginmodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                LOGIN
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={newNote.username}
                    required
                    placeholder="Enter Username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={onChange}
                    value={newNote.password}
                    required
                    minLength={4}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                {/* <button
          type="submit"
          className="btn btn-primary modal-footer"
        >
          REGISTER
        </button> */}
                <div className="modal-footer">
                  <button type="submit" className="btn button btn-warning">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
