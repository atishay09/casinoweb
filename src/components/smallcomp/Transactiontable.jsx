import React from "react";
import DataTable from "react-data-table-component";

const Transactiontable = () => {
  const data = [
    {
      accnumber: "123456789",
      accname: 'atishay jain',
      amount:"1000",
      bankname:"SBI",
      ifsc:"fjbsd51651",
      type:"Saving",
      date:"",
      remark:"",
      status:"success",
    },
    {
      accnumber: "123456789",
      accname: 'atishay jain',
      amount:"1000",
      bankname:"SBI",
      ifsc:"fjbsd51651",
      type:"Saving",
      date:"",
      remark:"",
      status:"success",
    },
    {
      accnumber: "123456789",
      accname: 'atishay jain',
      amount:"1000",
      bankname:"SBI",
      ifsc:"fjbsd51651",
      type:"Saving",
      date:"",
      remark:"",
      status:"success",
    },
    
    
  ];
  const columns = [
    {
      name: "Account Number",
      selector: (row) => row.accnumber,
    },
    {
      name: "Account Name",
      selector: (row) => row.accname,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Bank Name/Address",
      selector: (row) => row.bankname,
    },
    {
      name: "IFSC Code",
      selector: (row) => row.ifsc,
    },
    {
      name: "Account Type/Currency",
      selector: (row) => row.type,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];

  return (
    <DataTable
    title='Transaction Details'
      columns={columns}
      data={data}
      pagination
      fixedHeader
      highlightOnHover
    />
  );
};

export default Transactiontable;
