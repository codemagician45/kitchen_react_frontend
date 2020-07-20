/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import css2 from 'dan-styles/Buttons.scss';
import css from './index.scss';

import BlankPage from '../BlankPage';
import GetPersonalInfo from './GetPersonalInfo';

class UserNewOffer extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';

        const description = brand.desc;
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                </Helmet>
                    <div className={css.newOfferComponent}>
                        <GetPersonalInfo history={this.props.history}/>
                    </div>
            </div>

        );
    }
}

export default withStyles({})(UserNewOffer);
