import React, { useState } from 'react'

const Betslip = () => {
    const [amount, setAmount] = useState("");
    const [betamt, setbetamt] = useState(2.5);
   
    const amtchanged = (e) => {
      setAmount(e.target.value);
    };
    const betamount = (e) => {
      setAmount(e.target.value);
    };
  return (
    <div className='px-3 py-4'>
        <p>Srilanka v Austalia</p>
          <p>MATCH_ODDS</p>
          <div className="d-flex justify-content-between my-3">
            <h5 className="team_name">SriLanka</h5>
            <div className="bet-input-box">
              <button
                onClick={() => {
                  if (betamt === 1.01) {
                  } else if (betamt <= 2) {
                    setbetamt((betamt * 100 - 1) / 100);
                  } else if (betamt <= 3) {
                    setbetamt((betamt * 100 - 2) / 100);
                  } else if (betamt <= 4) {
                    setbetamt((betamt * 100 - 5) / 100);
                  } else if (betamt <= 6) {
                    setbetamt((betamt * 100 - 10) / 100);
                  } else if (betamt <= 10) {
                    setbetamt((betamt * 100 - 20) / 100);
                  } else if (betamt <= 20) {
                    setbetamt((betamt * 100 - 50) / 100);
                  } else if (betamt <= 40) {
                    setbetamt((betamt * 100 - 100) / 100);
                  } else if (betamt <= 60) {
                    setbetamt((betamt * 100 - 200) / 100);
                  } else {
                    setbetamt((betamt * 100 - 500) / 100);
                  }
                }}
                className="btn-minus btn-danger"
              >
                -
              </button>
              <input
                className="dispbetamt text-center"
                type="text"
                readOnly="readonly"
                value={betamt}
              />
              <button
                onClick={() => {
                  if (betamt < 2) {
                    setbetamt((betamt * 100 + 1) / 100);
                  } else if (betamt < 3) {
                    setbetamt((betamt * 100 + 2) / 100);
                  } else if (betamt < 4) {
                    setbetamt((betamt * 100 + 5) / 100);
                  } else if (betamt < 6) {
                    setbetamt((betamt * 100 + 10) / 100);
                  } else if (betamt < 10) {
                    setbetamt((betamt * 100 + 20) / 100);
                  } else if (betamt < 20) {
                    setbetamt((betamt * 100 + 50) / 100);
                  } else if (betamt < 40) {
                    setbetamt(betamt + 1);
                  } else if (betamt < 60) {
                    setbetamt(betamt + 2);
                  } else {
                    setbetamt(betamt + 5);
                  }
                }}
                className="btn-plus btn-success"
              >
                +
              </button>
            </div>
          </div>
        
          <div className="amtdetails">
            <input
              id="amount"
              type="number"
              name="amount"
              onChange={amtchanged}
              value={amount}
              placeholder="Amount"
            />
          </div>
          <div className="amtbtns ">
            <button
              value={1000}
              className="btn btn-primary"
              onClick={betamount}
            >
              1k
            </button>
            <button
              value={2000}
              className="btn btn-primary"
              onClick={betamount}
            >
              2k
            </button>
            <button
              value={5000}
              className="btn btn-primary"
              onClick={betamount}
            >
              5k
            </button>
            <button
              value={10000}
              className="btn btn-primary"
              onClick={betamount}
            >
              10k
            </button>
            <button
              value={20000}
              className="btn btn-primary"
              onClick={betamount}
            >
              20k
            </button>
            <button
              value={25000}
              className="btn btn-primary"
              onClick={betamount}
            >
              25k
            </button>
            <button
              value={50000}
              className="btn btn-primary"
              onClick={betamount}
            >
              50k
            </button>
            <button
              value={75000}
              className="btn btn-primary"
              onClick={betamount}
            >
              75k
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-warning button my-3"
            style={{ width: "100%" }}
          >
            Place bet
          </button>
          <hr />

          <div className="container_amtdetails w-100">
            <div className="col-12 d-flex">
              <div className="col-4 text-center">
                <span>Srilanka</span>
              </div>
              <div className="col-4 text-center text-success">
                <span>&nbsp;</span>
              </div>
              <div className="col-4 text-center text-danger">
                <span>1000</span>
              </div>
            </div>
          </div>
          <div className="container_amtdetails w-100">
            <div className="col-12 d-flex">
              <div className="col-4 text-center">
                <span>Srilanka</span>
              </div>
              <div className="col-4 text-center text-success">
                <span>&nbsp;</span>
              </div>
              <div className="col-4 text-center text-success">
                <span>1000</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Betslip