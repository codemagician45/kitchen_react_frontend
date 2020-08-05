/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

import css2 from "./index.scss";

import pdfImage from "./images/pdf.svg";
import idealImage from "./images/ideal.svg";
import { molliePay, companyOffers } from "../../../data/data";

const styles = (theme) => ({
  table: {
    "& > div": {
      overflow: "auto",
    },
    "& table": {
      minWidth: 500,
      [theme.breakpoints.down("md")]: {
        "& td": {
          height: 40,
        },
      },
    },
  },
});
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
const CompanyNiewOffersTable = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    companyOffers().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res.data);
      let table_data = [];
      res.data.new.map((element) => {
        let row_data = [
          element.type,
          element.createdAt.split("T")[0],
          element.city,
          "€ 12.500",
          "pdf",
          renderBuy(50),
        ];
        table_data.push(row_data);
      });
      setTableData(table_data);
    });
  }, []);

  const payForBid = () => {
    molliePay(50)
      .then((res) => {
        console.log(res.data);
        if (res.data) window.location.href = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderBuy = (value) => {
    let name = "€" + value + ",-";
    return (
      <div className={css2.buyButton} onClick={payForBid}>
        <span>{name}</span> &nbsp;
        <img src={idealImage} alt="" />
      </div>
    );
  };

  const columns = [
    {
      name: "Offerte type",
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
      name: "Plaats",
      options: {
        filter: true,
      },
    },
    {
      name: "Waarde",
      options: {
        filter: true,
      },
    },
    {
      name: "Bijlage",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <Link to="">
            <img className={css2.Responsive_pdf} src={pdfImage} alt="pdf" />
          </Link>
        ),
      },
    },
    {
      name: "Kopen",
    },
  ];

  const data = [
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Amsterdam",
      "€ 12.500",
      "pdf",
      renderBuy(50),
    ],
  ];

  const { classes } = props;
  const options = {
    onRowsDelete: (e) => {
      console.log(e);
    },
    filterType: "dropdown",
    responsive: "stacked",
    print: true,
    rowsPerPage: 10,
    page: 0,
  };

  return (
    <div className={css2.multiTableContainer}>
      <MUIDataTable data={tableData} columns={columns} options={options} />
    </div>
  );
};

CompanyNiewOffersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyNiewOffersTable);
