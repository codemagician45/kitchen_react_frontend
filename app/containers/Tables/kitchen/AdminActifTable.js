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
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import css from "dan-styles/Buttons.scss";
import css2 from "./index.scss";

import pdfImage from "./images/pdf.svg";

import { adminDashBoardOffers, fileDownload } from "../../../data/data";

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

/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
const AdminActifTable = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    adminDashBoardOffers().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res);
      let table_data = [];
      res.active.map((element) => {
        let row_data = [
          element.type,
          element.createdAt.split("T")[0],
          element.profile ? element.profile.email : "",
          element.city,
          element.answer_one,
          element.files,
          "€ 50",
          "",
          element.reactionCount,
          element.id,
        ];
        table_data.push(row_data);
      });
      setTableData(table_data);
    });
  }, []);
  const columns = [
    {
      name: "Offerte type",
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
      name: "Termijn",
      options: {
        filter: true,
      },
    },
    {
      name: "Bijlage",
      options: {
        filter: false,
        customBodyRender: (file) => (
          <div>
            <img src={pdfImage} alt="pdf" onClick={() => download(file)} />
          </div>
        ),
      },
    },
    {
      name: "Waarde",
      options: {
        filter: false,
      },
    },
    {
      name: "Offerteprijs",
      options: {
        filter: false,
      },
    },
    {
      name: "Reacties",
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

  const download = (file) => {
    console.log(file);
    if (file) {
      let download_files = JSON.parse(file);
      download_files.map((element) => {
        let data = {
          file: element,
        };
        fileDownload(data).then((res) => {
          if (res.isError || res.shouldLogin) {
            console.error("errors");
          }
          if (res.error) {
            console.error("error");
          }
          console.log("I am download", res);
          const url = window.URL.createObjectURL(
            new Blob([res.data], {
              type: "image/pdf",
            })
          );
          console.log("link", url);

          const link = document.createElement("a");

          link.href = url;

          link.setAttribute("download", element.split("/")[3]);

          // document.body.appendChild(link);

          link.click();
        });
      });
    }
  };

  const renderLink = (id) => {
    return (
      <Button
        variant="contained"
        color=""
        className={css.seeButton}
        onClick={() => viewOffer(id)}
      >
        BIJWERKEN &nbsp; &#x279C;
      </Button>
    );
  };

  const renderType = (value) => {
    return <div>{value}</div>;
  };

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

  const viewOffer = (id) => {
    console.log(id, props);
    props.history.push(`/admin/offers/${id}`);
  };
  return (
    <div className={css2.multiTableContainer}>
      <MUIDataTable data={tableData} columns={columns} options={options} />
    </div>
  );
};

AdminActifTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(AdminActifTable));
