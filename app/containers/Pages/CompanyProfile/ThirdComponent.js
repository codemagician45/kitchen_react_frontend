import React from "react";
import MUIDataTable from "mui-datatables";
import pdfImage from "./images/pdf.svg";

/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
const ThirdComponent = () => {
  const columns = [
    {
      name: "Offerte naam",
      options: {
        filter: true,
      },
    },
    {
      name: "Datum",
      options: {
        filter: true,
      },
    },
    {
      name: "Prijs",
      options: {
        filter: true,
      },
    },
    {
      name: "Downlanden",
      options: {
        filter: false,
        customBodyRender: (value) => <img src={pdfImage} alt="pdf" />,
      },
    },
  ];

  const data = [
    ["Modernkeuken 23 Offerte vergelijken", "18-08-2019", "€50", "pdf"],
  ];

  const options = {
    onRowsDelete: (e) => {
      console.log(e);
      console.log("shfeu");
    },
    filterType: "dropdown",
    responsive: "stacked",
    print: true,
    rowsPerPage: 10,
    page: 0,
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
};

export default ThirdComponent;
