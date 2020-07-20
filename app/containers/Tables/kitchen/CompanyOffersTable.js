/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */


import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
                name: 'Offerte tyoe',
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
                name: 'Plaats',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Waarde',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Reacties',
                options: {
                    filter: false,
                    customBodyRender: (value) => (
                        <Link to="/"><div>{value === 0 ? "Nog geen reacties" : value + ' reacties'}</div></Link>
                    )
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
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Rotterdam, NL', "€ 12.500'", 0, "1"],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam, NL', "€ 11.500'", 3, "2"],

        ]
    }

    // eslint-disable-next-line class-methods-use-this
    renderLink(link) {
        return (
            <Button
                variant="contained"
                color=""
                className={css.seeButton}
                onClick={() => {
                    this.props.history.push('/companies/offers/' + link)
                }}
            >
                BEKIJKEN &nbsp; &#x279C;
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
