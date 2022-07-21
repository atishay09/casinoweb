import React from "react";
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
  const data = [
    {
      sport: "",
      eventname: "",
      marketname: "",
      nation: "",
      userrate: "",
      amount: "",
      placedate: "",
      action: "",
    },
  ];
  const columns = [
    {
      name: "Sport",
      selector: (row) => row.sport,
      cellExport: (row) => row.sport,
    },
    {
      name: "Event Name",
      selector: (row) => row.eventname,
      cellExport: (row) => row.eventname,
    },
    {
      name: "Market Name",
      selector: (row) => row.marketname,
      cellExport: (row) => row.marketname,
    },
    {
      name: "Nation",
      selector: (row) => row.nation,
      cellExport: (row) => row.nation,
    },
    {
      name: "User Rate",
      selector: (row) => row.userrate,
      cellExport: (row) => row.userrate,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      cellExport: (row) => row.amount,
    },
    {
      name: "Place Date",
      selector: (row) => row.placedate,
      cellExport: (row) => row.placedate,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      cellExport: (row) => row.action,
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
      <div className="mx-5 mt-4">
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
