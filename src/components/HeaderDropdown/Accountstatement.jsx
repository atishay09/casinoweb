import React from "react";
import DataTable from "react-data-table-component";
import Header2 from "../Headers/Header2";

const Accountstatement = () => {
  const data = [
    {
      date: "",
      srno: "atishay jain",
      credit: "1000",
      debit: "SBI",
      pts: "fjbsd51651",
      remark: "",
    },
  ];
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Sr no",
      selector: (row) => row.srno,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
    },
    {
      name: "Debit",
      selector: (row) => row.debit,
    },
    {
      name: "Pts",
      selector: (row) => row.pts,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
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

export default Accountstatement;
