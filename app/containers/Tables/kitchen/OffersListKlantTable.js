/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */


import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import MUIDataTable from 'mui-datatables';
import css from 'dan-styles/Buttons.scss';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import css2 from './index.scss';



const styles = theme => ({
    table: {
        '& > div': {
            overflow: 'auto'
        },
        '& table': {
            minWidth: 500,
            [theme.breakpoints.down('md')]: {
                '& td': {
                    height: 40
                }
            }
        }
    }
});
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class AdvFilter extends React.Component {
    state = {
        columns: [
            {
                name: 'Offerte type',
                options: {
                    filter: true
                }
            },
            {
                name: 'Datum',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Reacties',
                options: {
                    filter: false,
                    customBodyRender: (value) => (
                        <LinearProgress variant="determinate" color="secondary" value={value[0]} />
                    )
                }
            },
            {
                name: 'Status',
                options: {
                    filter: false,
                    customBodyRender: (value) => this.renderStatus(value)
                }
            },
            {
                name: "",
                options: {
                    filter: false,
                    customBodyRender: (value) => this.renderLink(value)
                }
            },
        ],
        data: [
            ['Offerte vergelijking 1', '18-08-2019', [100, 2], 'actief', "1"],
            ['Offerte aanvraag 1', 'Business Consultant', [55, 2], 'concept', "2"],
            ['3d ontwerp 1 ', 'Attorney', [27, 2], 'afgehandeld', "3"],
        ]
    }

    renderLink(link) {
        return (
            <Button
                variant="contained"
                color=""
                className={css.seeButton}
                onClick={() => {
                    this.props.history.push('/users/offers/' + link)
                }}
            >
                BEKIJKEN &nbsp; &#x279C;
            </Button>
        );
    }


    renderStatus(status) {
        let name = status + 'Button';
        console.log(css[name]);
        return (
            <Button
                variant="contained"
                color=""
                className={css[name]}
            >
                {status.toUpperCase()}
            </Button>
        );
    }

    render() {
        const { columns, data } = this.state;
        const { classes } = this.props;
        const options = {
            onRowsDelete:
                (e) => {
                    console.log(e);
                    console.log("shfeu");
                },
            filterType: 'dropdown',
            responsive: 'stacked',
            print: true,
            rowsPerPage: 10,
            page: 0
        };
        return (
            <div className={css2.multiTableContainer}>
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

AdvFilter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
