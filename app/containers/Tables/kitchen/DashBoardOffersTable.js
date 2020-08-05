import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from 'dan-components/Tables/tableStyle-jss';
import css from './index.scss';




function DashBoardOffersTable(props) {
  const { classes, data } = props;
  console.log(data)
  return (
    <Fragment>
      <div className={css.tableComponent}>
        <Table className={classNames(classes.stripped)}>
          <TableBody>
            {[]&&data.map(n => ([
              <TableRow key={n.id}>
                <TableCell className={css.typeCell}>{n.name}</TableCell>
                <TableCell className="dateCell">{''&&n.createdAt.split('T')[0]}</TableCell>
                <TableCell className={css.reactionCell}>{n.reactions + ' reacties'}</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}

DashBoardOffersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashBoardOffersTable);