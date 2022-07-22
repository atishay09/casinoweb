import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import contextvalue from '../Context/context'
import { useContext } from "react";

const Depositmoney = () => {

  const context = useContext(contextvalue);
  const {isdepOpen,setdepOpen} = context;

  const [amount, setAmount] = useState("");
  const hideModal = () => {
    setdepOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
  };

  return (
    <>
      <Modal show={isdepOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 deposit_form_top"
              controlId="formBasicEmail"
            >
              <div>
                <div className="form-group input_amt">
                  <label className="mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={amount}
                    min='100'
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <input type="hidden" name="uname" value="satz" />
              </div>
              <div className="form-group payment_type">
                <label className="mb-2">Payment Type</label>
                <select id="choice">
                  <option value="card" default>
                    Cards, UPI &amp; NETBANKING Method - Accept Cards, UPI &amp;
                    NETBANKING.
                  </option>
                  <option value="first">
                    UPI Method-1 - Accept UPI Payment.
                  </option>
                  <option value="second">
                    Crypto Method - We accept BTC, ETH, ERC20 &amp; TRC20
                  </option>
                  <option value="third">
                    UPI Method-2 - Accept UPI Payment.
                  </option>
                </select>
              </div>
              <div className="button_sub">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Modal.Footer>
              <div className="mt-3">
                <p>
                  After you deposit the amount please send the screenshot of
                  your transaction to our support whatsapp number
                </p>{" "}
                <p>
                  <i className="fab fa-whatsapp mr-2"></i> +447411114111 /
                  +447380173801 /+447377773777 / +447403777777 /
                </p>{" "}
                <p>
                  For more transaction security we accept only indian cards and
                  wallets
                </p>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Depositmoney;
