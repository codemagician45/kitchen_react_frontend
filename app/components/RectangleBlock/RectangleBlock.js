import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './papperStyle-jss';
import css from 'dan-styles/Rectangle.scss';

class RectangleBlock extends React.Component {
  render() {
    const {
      data
    } = this.props;

    return (
      <div className={css.ReactangleConmponent}>
        <Typography component="h3">
          {data.title}
        </Typography>
        <Typography component="h1">
          {data.number}
        </Typography>
        <Typography component="a">
          {data.link}
        </Typography>
      </div>
    );
  }
}

RectangleBlock.propTypes = {
  data: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(RectangleBlock);
