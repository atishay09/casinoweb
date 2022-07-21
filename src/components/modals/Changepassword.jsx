import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import contextvalue from "../Context/context";
import { useContext } from "react";
import Form from 'react-bootstrap/Form'

const Changepassword = () => {
  const [newNote, setnewNote] = useState({
    oldpswd: "",
    newpswd: "",
    repnewpswd: "",
  });
  const onChange = (e) => {
    setnewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const context = useContext(contextvalue);
  const { changepswdmodal, setchangepswdmodal } = context;

  const handleClosecp = () => {
    setchangepswdmodal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal show={changepswdmodal} onHide={handleClosecp}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Old Password</Form.Label>
              <input
                type="password"
                className="form-control"
                id="oldpswd"
                name="oldpswd"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={newNote.oldpswd}
                required
                minLength={3}
                placeholder="Old Password"
                autoComplete="username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <input
                type="password"
                className="form-control"
                id="newpswd"
                name="newpswd"
                onChange={onChange}
                value={newNote.newpswd}
                required
                minLength={3}
                placeholder="New Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <input
                type="password"
                className="form-control"
                id="repnewpswd"
                name="repnewpswd"
                onChange={onChange}
                value={newNote.repnewpswd}
                required
                minLength={3}
                placeholder="Confirm New Password"
              />
            </Form.Group>

            <Modal.Footer>
              {/* <button className="btn btn-warning button" onClick={hideModal}>Cancel</button> */}
              <button type="submit" className="btn btn-warning button modal-btn">
                Change Password
              </button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Changepassword;
