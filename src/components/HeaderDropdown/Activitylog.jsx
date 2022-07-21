import React from "react";
import DataTable,{createTheme} from "react-data-table-component";
import Header2 from "../Headers/Header2";

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
  const data = [
    {
      name: "",
      date: "",
      ipaddress: "",
    },
  ];
  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "IP address",
      selector: (row) => row.ipaddress,
    },
  ];

  return (
    <>
      <Header2 />
      <div className="withdraw_head">
        <h2>Activity Log</h2>
      </div>
      <div className="mx-5 mt-4">
        <DataTable
          title="Activities"
          columns={columns}
          data={data}
          pagination
          fixedHeader
          highlightOnHover
          theme="solarized"
        />
      </div>
    </>
  );
};

export default Activitylog;
