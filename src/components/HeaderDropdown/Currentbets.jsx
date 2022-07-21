import React from "react";
import Header2 from '../Headers/Header2'
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";

const Currentbets = () => {


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
