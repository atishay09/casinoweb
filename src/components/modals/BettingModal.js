import React from "react";
import Modal from "react-bootstrap/Modal";
import Betslip from "../Betting/Betslip";

const BettingModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
 
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>BET SLIP</Modal.Title>
        </Modal.Header>
        <Betslip />
          
      </Modal>
    </>
  );
};

export default BettingModal;
