/* eslint-disable class-methods-use-this */
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
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import css from 'dan-styles/Buttons.scss';
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
                name: 'Bedrijfsnaam',
                options: {
                    filter: true
                }
            },
            {
                name: 'E-mail',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Telefoon',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Website',
                options: {
                    filter: true,
                }
            },
            {
                name: 'status',
                options: {
                    filter: true,
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
            ['Enka Keuken', 'info@enkakeukens.nl', '0612345678', 'www.enkakeuken.com', 'actif', 'link'],
            ['Maxaro', 'info@maxaro.nl', '0612345678', 'www.maxarokeueken.com', 'passive', 'link'],

        ]
    }

    renderLink(link) {
        return (
            <Button
                variant="contained"
                color=""
                className={css.seeButton}
            >
                BEKIJKEN &nbsp; &#x279C;
            </Button>
        );
    }

    renderStatus(value) {
        let className = '';
        if (value === 'actif') {
            className = 'actifType';
        } else {
            className = 'passifType';
        }

        return (
            <div className={className} />
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
