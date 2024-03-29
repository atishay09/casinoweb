import React, { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Header2 from "../Headers/Header2";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "./Account.css";
import { Button } from "@mui/material";
createTheme(
  "solarized",
  {
    text: {
      primary: "#c2c2c2",
      secondary: "#b8b8b8",
    },
    background: {
      default: "#23292e",
    },
    context: {
      text: "#ffffff",
      background: "#939393",
    },
    divider: {
      default: "#848484",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const Accountstatement = () => {
  const [datadate, setDatadate] = useState({
    fromdate:"",
    todate:"",
    type:""
  })

  const onChange = (e) => {
    setDatadate({ ...datadate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datadate)
  };

  const data = [
    {
      date: "153",
      srno: "atishay jain",
      credit: "1000",
      debit: "SBI",
      pts: "fjbsd51651",
      remark: "ok",
    },
    {
      date: "154",
      srno: "atishay jain",
      credit: "1000",
      debit: "SBI",
      pts: "fjbsd51651",
      remark: "ok",
    },
    {
      date: "152",
      srno: "atishay jain",
      credit: "1000",
      debit: "SBI",
      pts: "fjbsd51651",
      remark: "ok",
    },
  ];
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      cellExport: (row) => row.date,
    },
    {
      name: "Sr no",
      selector: (row) => row.srno,
      cellExport: (row) => row.srno,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      cellExport: (row) => row.credit,
    },
    {
      name: "Debit",
      selector: (row) => row.debit,
      cellExport: (row) => row.debit,
    },
    {
      name: "Pts",
      selector: (row) => row.pts,
      cellExport: (row) => row.pts,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
      cellExport: (row) => row.remark,
    },
  ];
  const tableData = {
    columns,
    data,
  };

  return (
    <>
      <Header2 />
      <div className="withdraw_head">
        <h2>Account Statement</h2>
      </div>

      <div className="mx-3 date-picker-table mt-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="start">From :</label>
          <input name='fromdate' value={datadate.fromdate} onChange={onChange} type="date" id="start" />
          <label htmlFor="start">To: </label>
          <input name="todate" value={datadate.todate} onChange={onChange} type="date" id="start" />
          <select name="type" onChange={onChange} className="accstatement options">
            <option value="all">All</option>{" "}
            <option value="depositwithdraw">Deposit/Withdraw Report</option>{" "}
            <option value="game">Game Report</option>
          </select>
          <button type='submit' className="btn btn-table-form btn-primary">Submit</button>
        </form>
        <DataTableExtensions {...tableData}>
          <DataTable
            title="Transaction Details"
            columns={columns}
            data={data}
            pagination
            fixedHeader
            highlightOnHover
            theme="solarized"
          />
        </DataTableExtensions>
      </div>
    </>
  );
};

export default Accountstatement;
