import { Button } from "@mui/material";
import React from "react";
import HeaderSport from "../Headers/HeaderSport";
import Leftsidebar from "../Sidebar/Leftsidebar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DataTable from "react-data-table-component";



const Bonus = ({ isLogin, setLogin }) => {
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
      <div className="main_container">
        <Leftsidebar isLogin={isLogin} />
        <div className="center_component d-flex flex-column">
          <HeaderSport setLogin={setLogin} />
          <div className="d-flex">
            <div className="container-fluid">
              <div className="d-flex mt-3">
                <h3 className="mx-2">Bonus</h3>
                <Button variant="outlined">
                  Terms And Conditions &nbsp;
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
                  
                />
                </div>
              </div>
              <div className="row">
              <div className="col-12">
                <DataTable
                  
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
