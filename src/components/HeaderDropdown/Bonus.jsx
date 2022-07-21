import { Button } from "@mui/material";
import React, { useState } from "react";
import HeaderSport from "../Headers/HeaderSport";
import Leftsidebar from "../Sidebar/Leftsidebar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DataTable,{createTheme} from "react-data-table-component";
import Modal from 'react-bootstrap/Modal';

createTheme('solarized',{
  text:{
    primary: '#c2c2c2',
    secondary : '#b8b8b8',
  },
  background : {
    default : '#262626'
  },
  context:{
    text : '#ffffff',
    background:'#939393'
  },
  divider:{
    default :"#848484"
  },
  action:{
    button : 'rgba(0,0,0,.54)',
    hover : 'rgba(0,0,0,.08)',
    disabled : 'rgba(0,0,0,.12)',
  },
},'dark')


const Bonus = () => {

  const [lgShow, setLgShow] = useState(false);

    const data2 = [
        {
          date:"15/07/2022",
          transno:"12345867",
          pts:"5",
        },
      ];
      const columns2 = [
        {
          name: "Date",
          selector: (row) => row.date,
        },
        {
          name: "Tran. No",
          selector: (row) => row.transno,
        },
        {
          name: "Pts",
          selector: (row) => row.pts,
        },
      ];
      const data3 = [
        {
            coupon: "",
            pts: "",
            dpts:"",
            tranno:"",
            status:"",
            gdate:"",
            edate:"",
        },
        
        
      ];
      const columns3 = [
        {
          name: "Coupon Name",
          selector: (row) => row.coupon,
        },
        {
          name: "Coupon Pts",
          selector: (row) => row.pts,
        },
        {
          name: "Depo Pts",
          selector: (row) => row.dpts,
        },
        {
          name: "Tran. No",
          selector: (row) => row.tranno,
        },
        {
          name: "Status",
          selector: (row) => row.status,
        },
        {
          name: "Given Date",
          selector: (row) => row.gdate,
        },
        {
          name: "Expired Date",
          selector: (row) => row.edate,
        },
      ];
      
  return (

    <>
    <Modal
        size="lg" 
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header  closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Terms and Conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        1) The Bonus Will Be Added to User wallet once the User Completed the Required Turnover. i.e., If the Deposited Amount is 10000 And User Activated 10% Bonus, User have to complete the Turnover of 20 times of the Deposited Amount to get the 1000 Bonus.<br/>
2) There Are Five Types of Bonus Coupons Provided by Wolf777.<br/>
i) 1st Bonus is of 5% bonus with 7 times Wagering. Both Sports and Casinos Will be Calculated for Turnover. Maximum Cap of 5000 will be Given as bonus After Completing Turnover.<br/>
ii) 2nd Bonus is of 10% bonus with 20 times Wagering. Only Casinos Will be Calculated for Turnover. Maximum Cap of 7000 will be Given as bonus After Completing Turnover.<br/>
iii) 3rd Bonus is of 15% bonus with 25 times Wagering. Only Fancy Market Will be Calculated for Turnover. Maximum Cap of 15000 will be Given as bonus After Completing Turnover..<br/>
iv) 4th Bonus is of 20% Bonus With 30 times wagering. Both Sports and Casinos will be Calculated for Turnover. Maximum cap of 10000 will be Given as Bonus after completing Turnover.<br/>
v) 5th Bonus is of 50% Bonus With 100 Times Wagering. Only Sports will be Calculated for turnover. Maximum Cap of 20000 will be given as bonus After Completing Turnover. Minimum Deposit Should be 99999 for Activating this Coupon. Match odds Will be Calculated in this Bonus Coupon.<br/>
vi) All the Coupons Will be Valid for Only 7 days. After 7 Days Coupon will expire if customer fail to complete the Turnover.<br/>
vii) Match odds Will be calculated on 50% Bonus Coupon only.<br/>
3) Bonus Cannot be Cancelled once it is Activated.<br/>
4) Minimum Deposit to Avail Bonus is 1000<br/>
5) More Than Rate of 40 in Bookmaker and Fancy bets will be considered for turnover. Bets Lesser than the Rates wonâ€™t be calculated. No Match odds bets Will be calculated for Turnover.<br/>
6) In Casinos Also rates More than 1.40 Will be calculated lesser than that wonâ€™t be calculated.<br/>
7) Turnover Will Not Be Calculated in ROULETTE Of Our Casino, Live Casino, Slot Games and Other Fantasy Games<br/>
8) Customer Can Activate only one Bonus Coupon for per Deposit.<br/>
9) Once User Activated Multiple Bonus Coupon the turnover will be calculated on the First Coupon which he Activated First. After the Completion of first Coupon Turnover or Coupon Got Expired then only the Turnover will be calculated on next Coupon.<br/>
10) The wagering requirements must be met within 7 days after you receive your bonus, otherwise the bonus will expire, and the bonus amount shall be forfeited.<br/>
11) Multiple accounts will not be considered for this promotion. All players will be subject for duplicate checking. Wolf777 reserves the right to disqualify players if collusion or any foul play takes place in the promotion.<br/>
12) Wolf777 reserves the right to amend, cancel and reclaim or refuse any promotion at its sole discretions.<br/>
13) The bonus is locked in bonus wallet until the wagering requirement is fulfilled. Only after completing wagering, player will be eligible to use or withdraw the bonus amount.<br/>
14) This promotion cannot be used in conjunction with, or to contribute to the eligibility for, any other promotion.<br/>
        </Modal.Body>
      </Modal>

      <div className="main_container">
        <Leftsidebar />
        <div className="center_component d-flex flex-column">
          <HeaderSport />
          <div className="d-flex">
            <div className="container-fluid bonus_page">
              <div className="d-flex mt-3 info">
                <h3 className="mx-2">Bonus</h3>
                <Button onClick={() => setLgShow(true)} variant="outlined">
                 <p> Terms And Conditions &nbsp;</p>
                  <InfoOutlinedIcon />
                </Button>
              </div>
              <div className="row my-3">
              <div className="col-md-6">
                <DataTable
                  
                  columns={columns2}
                  data={data2}
                  pagination
                  fixedHeader
                  highlightOnHover
                  theme="solarized"
                />
                </div>
              </div>
              <div className="row">
              <div className="col-12">
                <DataTable
                  theme="solarized"
                  columns={columns3}
                  data={data3}
                  pagination
                  fixedHeader
                  highlightOnHover
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bonus;
