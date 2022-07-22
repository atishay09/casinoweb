import React from "react";
import Header2 from '../Headers/Header2'
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";

const Currentbets = () => {

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
    <Header2/>
      <div className="withdraw_head my-2">
      <h2 >Current Bets</h2></div>
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

export default Currentbets;
