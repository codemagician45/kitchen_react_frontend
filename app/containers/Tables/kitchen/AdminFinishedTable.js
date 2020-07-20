/* eslint-disable class-methods-use-this */
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
import { Button } from "@material-ui/core";
import css from "dan-styles/Buttons.scss";
import css2 from "./index.scss";

import pdfImage from "./images/pdf.svg";

import { adminDashBoardOffers } from "../../../data/data";

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
const AdminFinishedTable = (props) => {
  useEffect(() => {
    adminDashBoardOffers().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res);
    });
  }, []);
  const columns = [
    {
      name: "Offerte naam",
      options: {
        filter: true,
        customBodyRender: (value) => renderType(value),
      },
    },
    {
      name: "Datum",
      options: {
        filter: true,
      },
    },
    {
      name: "Gebruiker",
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
      name: "Offerteprijs",
      options: {
        filter: false,
      },
    },
    {
      name: "Verkoopprijs",
      options: {
        filter: false,
      },
    },
    {
      name: "",
      options: {
        filter: false,
        customBodyRender: (value) => renderLink(value),
      },
    },
  ];
  const data = [
    [
      "Modernkeuken 23 Offerte vergelijken",
      "18-08-2019",
      "Ali Oz",
      "Amsterdam",
      "€ 12.500",
      "€ 50",
      "€ 10.500",
      "link",
    ],
  ];

  const renderLink = (link) => {
    return (
      <Button variant="contained" color="" className={css.seeButton}>
        BEKIJKEN &nbsp; &#x279C;
      </Button>
    );
  };

  const renderType = (value) => {
    return <div>{value}</div>;
  };

  const { classes } = props;
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
    <div className={css2.multiTableContainer}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
};

AdminFinishedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminFinishedTable);
