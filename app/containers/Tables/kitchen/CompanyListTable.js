/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect } from "react";
import {
  withStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import css from "dan-styles/Buttons.scss";
import css2 from "./index.scss";
import { adminDashBoardCompanies } from "../../../data/data";

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
const CompanyListTable = (props) => {
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

  const [modalOpen, setModalOpen] = useState(false);
  const [changeUserId, setChangeUserId] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    adminDashBoardCompanies().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res);
      // this.setState({ info: res })
      let table_data = [];
      res.data.map((element) => {
        table_data.push([
          element.profile ? element.profile.name : "",
          element.email,
          element.profile ? element.profile.telephone_number : "",
          element.profile ? element.profile.city : "",
          "",
          "link",
        ]);
      });
      setTableData(table_data);
    });
  }, []);

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setChangeUserId(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChangeUser = () => {
    setModalOpen(false);
    let data = {
      user_id: changeUserId,
    };
    // userToCompany(data).then((res) => {
    //   if (res.isError || res.shouldLogin) {
    //     console.error("errors");
    //   }
    //   if (res.error) {
    //     console.error("error");
    //   }
    //   console.log(res.data);
    //   if(res.data.success) {
    //     let new_tableData = tableData.filter(function(item){ return item[5] != changeUserId});
    //     console.log(new_tableData);
    //     setTableData(new_tableData);
    //     setChangeUserId("");
    //   }
    // });
  };

  const renderLink = (id) => {
    return (
      <Button
        variant="contained"
        color=""
        className={css.seeButton}
        onClick={() => handleModalOpen(id)}
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
      <MUIDataTable data={tableData} columns={columns} options={options} />
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {'Use Google\'s location service?'}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Weet u het zeker? De Klant, wordt als bedrijf gewijzigd.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Nee
          </Button>
          <Button onClick={handleChangeUser} color="primary" autoFocus>
            ja
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

CompanyListTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyListTable);
