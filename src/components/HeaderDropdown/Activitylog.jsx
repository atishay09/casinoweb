import React from "react";
import DataTable from "react-data-table-component";
import Header2 from "../Headers/Header2";

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
        <h2>Account Statement</h2>
      </div>
      <div className="mx-5 mt-4">
        <DataTable
          title="Transaction Details"
          columns={columns}
          data={data}
          pagination
          fixedHeader
          highlightOnHover
        />
      </div>
    </>
  );
};

export default Activitylog;
