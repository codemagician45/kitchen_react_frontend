/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import css from "dan-styles/Buttons.scss";
import css2 from "./index.scss";

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
const UserListTable = (props) => {
  const columns = [
    {
      name: "Naam",
      options: {
        filter: true,
      },
    },
    {
      name: "E-mail",
      options: {
        filter: true,
      },
    },
    {
      name: "Telefoon",
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
      name: "status",
      options: {
        filter: true,
        customBodyRender: (value) => renderStatus(value),
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
    ["Ali Oz", "alioz@mail.com", "0612345678", "Amsterdam", "active", "link"],
    ["Ali Oz", "alioz@mail.com", "0612345678", "Amsterdam", "passive", "link"],
  ];

  const renderLink = (link) => {
    return (
      <Button
        variant="contained"
        color=""
        className={css.seeButton}
        onClick={() => viewDetail(link)}
      >
        BEKIJKEN &nbsp; &#x279C;
      </Button>
    );
  };

  const renderStatus = (value) => {
    let className = "";
    if (value === "actif") {
      className = "actifType";
    } else {
      className = "passifType";
    }

    return <div className={className} />;
  };

  const viewDetail = (id) => {
    console.log(id);
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
      <MUIDataTable data={props.tableData} columns={columns} options={options} />
    </div>
  );
};

UserListTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserListTable);
