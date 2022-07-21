import React from "react";
import DataTable , {createTheme} from "react-data-table-component";

createTheme('solarized',{
  text:{
    primary: '#c2c2c2',
    secondary : '#b8b8b8',
  },
  background : {
    default : '#262626'
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
      theme="solarized"
    />
  );
};

export default Transactiontable;

