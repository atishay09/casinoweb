import React, { useState } from "react";
import DataTable,{createTheme} from "react-data-table-component";
import Header2 from "../Headers/Header2";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

createTheme('solarized',{
  text:{
    primary: '#c2c2c2',
    secondary : '#b8b8b8',
  },
  background : {
    default : '#23292e'
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

const Activitylog = () => {

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
  
  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      cellExport: (row) => row.username,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      cellExport: (row) => row.date,
    },
    {
      name: "IP address",
      selector: (row) => row.ipaddress,
      cellExport: (row) => row.ipaddress,
    },
  ];

  const data = [
    {
      name: "",
      date: "",
      ipaddress: "",
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
        <h2>Activity Log</h2>
      </div>
      <div className="mx-5 date-picker-table mt-4">
      
      <form onSubmit={handleSubmit}>
          <label htmlFor="start">From :</label>
          <input name='fromdate' value={datadate.fromdate} onChange={onChange} type="date" id="start" />
          <label htmlFor="start">To: </label>
          <input name="todate" value={datadate.todate} onChange={onChange} type="date" id="start" />
          <select name="type" onChange={onChange} className="accstatement options">
            <option value="login">Login</option>{" "}
            <option value="changepassword">Change Password</option>{" "}
          </select>
          <button type='submit' className="btn btn-table-form btn-primary">Submit</button>
        </form>
      <DataTableExtensions {...tableData}>
        <DataTable
          title="Activities"
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

export default Activitylog;
