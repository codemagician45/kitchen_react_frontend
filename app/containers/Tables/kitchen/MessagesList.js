import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "dan-components/Tables/tableStyle-jss";
import { Grid } from "@material-ui/core";
import css from "./index.scss";

let id = 0;
function createData(logo, name, status) {
  id += 1;
  return {
    id,
    logo,
    name,
    status,
  };
}

const datasss = [
  createData("logo", "Keukenconcurrent", "Tot ziens.."),
  createData("logo", "Superkeukens", "is aan het typen"),
  createData("logo", "Superkeukens", "is aan het typen"),
];

function MessagesList(props) {
  const { classes, data } = props;
  return (
    <Fragment>
      <div className={css.messagesComponent}>
        {data &&
          data.map((n, key) => [
            <Grid container className={css.messagesRow} key={key}>
              {n.logo && (
                <Grid item xs={3}>
                  {n.logo}
                </Grid>
              )}
              <Grid item xs={8}>
                <div className={css.companyCell}>
                  <h3>{n.name}</h3>
                  <span>{n.status}</span>
                </div>
              </Grid>
            </Grid>,
          ])}
      </div>
    </Fragment>
  );
}

MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(MessagesList);
