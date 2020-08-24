import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./papperStyle-jss";
import css from "dan-styles/Rectangle.scss";
import { withRouter } from "react-router-dom";

const RectangleBlock = (props) => {
  const { data } = props;

  const goto = () => {
    console.log(data);
    props.history.push(data.url);
  };

  return (
    <div className={css.ReactangleConmponent}>
      <Typography component="h3">{data.title}</Typography>
      <Typography component="h1">{data.number}</Typography>
      <Typography component="a" onClick={goto}>
        {data.link}
      </Typography>
    </div>
  );
};

RectangleBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(withRouter(RectangleBlock));
