import React from "react";
import { useState } from "react";
import Footer from '../Footer/Footer'  
import Header2 from "../Headers/Header2";
import Transactiontable from "./Transactiontable";

const Withdrawmoney = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formwithdraw, setformWithdraw] = useState(0);

  const [withdrawdetails, setWithdrawdetails] = useState({
    amount: "",
    accountno: "",
    accname: "",
    bankname: "",
    ifsc: "",
    type: "",
  });
  const onChange = (e) => {
    setWithdrawdetails({ ...withdrawdetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header2 />
      <div className="withdraw_head">
      <h2>Withdraw Request</h2></div>
      <div className="d-flex container-fluid main_withdraw_form">
        <div className="row col-12">
          <div className="col-2 withdraw_type">
            <div className="withdraw-form">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="normal-withdraw"
                  onChange={() => {
                    setformWithdraw(0);
                  }}
                />
                <label className="form-check-label" htmlFor="normal-withdraw">
                  Normal Withdrawal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="express-withdraw"
                  onChange={() => {
                    setformWithdraw(1);
                  }}
                />
                <label className="form-check-label" htmlFor="express-withdraw">
                  Express Withdrawal
                </label>
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="crypto-withdraw"
                onChange={() => {
                  setformWithdraw(2);
                }}
              />
              <label className="form-check-label" htmlFor="crypto-withdraw">
                Crypto Withdrawal
              </label>
            </div>
          </div>
          <div className="withdraw-details-form d-flex col-10">
            {formwithdraw === 0 ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  id="normal-withdraw-form"
                  className="withdraw-money-form "
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Amount"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={onChange}
                      value={withdrawdetails.amount}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Account Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Account Number"
                      id="accountno"
                      name="accountno"
                      onChange={onChange}
                      value={withdrawdetails.accountno}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Account Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Name"
                      id="accname"
                      name="accname"
                      onChange={onChange}
                      value={withdrawdetails.accname}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Bank Name/Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankname"
                      placeholder="Bank Name/Address"
                      name="bankname"
                      onChange={onChange}
                      value={withdrawdetails.bankname}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      IFSC
                    </label>
                    <input
                      type="text"
                      placeholder="IFSC"
                      className="form-control"
                      id="ifse"
                      name="ifsc"
                      onChange={onChange}
                      value={withdrawdetails.ifsc}
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Account Type/Currency
                    </label>
                    <div>
                      <select
                        id="choice"
                        name="type"
                        onChange={onChange}
                        required
                      >
                        <option value="saving" name="type" default>
                          Saving
                        </option>
                        <option value="current" name="type">
                          Current
                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </>
            ) : formwithdraw === 1 ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  id="express-withdraw-form"
                  className="withdraw-money-form"
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Amount"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={onChange}
                      value={withdrawdetails.amount}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Account Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Account Number"
                      id="accountno"
                      name="accountno"
                      onChange={onChange}
                      value={withdrawdetails.accountno}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Account Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Name"
                      id="accname"
                      name="accname"
                      onChange={onChange}
                      value={withdrawdetails.accname}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Bank Name/Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankname"
                      placeholder="Bank Name/Address"
                      name="bankname"
                      onChange={onChange}
                      value={withdrawdetails.bankname}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      IFSC
                    </label>
                    <input
                      type="text"
                      placeholder="IFSC"
                      className="form-control"
                      id="ifse"
                      name="ifsc"
                      onChange={onChange}
                      value={withdrawdetails.ifsc}
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Account Type/Currency
                    </label>
                    <div>
                      <select id="choice" onChange={onChange} required>
                        <option value="saving" name="type" default>
                          Saving
                        </option>
                        <option value="current" name="type">
                          Current
                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  id="crypto-withdraw-form"
                  className="withdraw-money-form"
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Amount"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={onChange}
                      value={withdrawdetails.amount}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Bank Name/Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankname"
                      placeholder="Bank Name/Address"
                      name="bankname"
                      onChange={onChange}
                      value={withdrawdetails.bankname}
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Account Type/Currency
                    </label>
                    <div>
                      <select id="choice" onChange={onChange} required>
                        <option value="BTC" name="type" default>
                          BTC
                        </option>
                        <option value="ETH" name="type">
                          ETH
                        </option>
                        <option value="USDTE" name="type">
                          USDTE
                        </option>
                        <option value="USDTT" name="type">
                          USDTT
                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
        <div className="mx-3 my-4">
        <Transactiontable />
        </div>
        <div>
        <Footer/>
        </div>
    </>
  );
};

export default Withdrawmoney;
