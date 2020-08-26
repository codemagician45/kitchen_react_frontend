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
import css from "dan-styles/Buttons.scss";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import css2 from "./index.scss";
import { companyOffers } from "../../../data/data";

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
const CompanyFinishedTable = (props) => {
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
      name: "Plaats",
      options: {
        filter: true,
      },
    },
    {
      name: "Postcode",
      options: {
        filter: true,
      },
    },
    {
      name: "Huisnummer",
      options: {
        filter: true,
      },
    },
    {
      name: "Telefoon nummer",
      options: {
        filter: true,
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
      res.data.attendedOffers.map((element) => {
        let row_data = [
          element.type,
          element.createdAt.split("T")[0],
          element.city,
          element.postcode,
          element.house_number,
          element.telephone_number,
          element.id,
        ];
        table_data.push(row_data);
      });
      setTableData(table_data);
    });
  }, []);

  // eslint-disable-next-line class-methods-use-this
  const renderLink = (link) => {
    return (
      <Button
        variant="contained"
        color=""
        className={css.seeButton}
        onClick={() => {
          props.history.push("/companies/offers/" + link);
        }}
      >
        BEKIJKEN &nbsp; &#x279C;
      </Button>
    );
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
      <MUIDataTable data={tableData} columns={columns} options={options} />
    </div>
  );
};

CompanyFinishedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyFinishedTable);
