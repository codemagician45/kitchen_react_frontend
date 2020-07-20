/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { OffersList, MessagesList, RectangleBlock } from 'dan-components';
import { Grid } from '@material-ui/core';
import BlankPage from '../BlankPage';


class CompaniesDashBoard extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';
        const description = brand.desc;
        let id = 0;
        function createData(logo, name, status) {
            id += 1;
            return {
                id,
                logo,
                name,
                status
            };
        }

        let id2 = 0;
        function createUserData(type, datum, reactions) {
            id2 += 1;
            return {
                id2,
                type,
                datum,
                reactions
            };
        }

        const UserData = [
            createUserData('Modernkeuken 23', '18-08-2019', 3),
            createUserData('Modernkeuken 25', '18-08-2019', 3),
        ];

        const MessagesData = [
            createData(false, 'Klant A.Brouwer - Offerte 2019 ', 'Tot ziens..'),
            createData(false, 'Klant A.Brouwer - Offerte 2019 ', 'is aan het typen'),
            createData(false, 'Klant A.Brouwer - Offerte 2019 ', 'is aan het typen')
        ];

        const datas = [
            { number: 22, title: 'Nieuwe offertes', link: 'Bekijken' },
            { number: 12, title: 'Mijn offertes', link: 'Bekijken' },
            { number: 4, title: 'Afspraken', link: 'Bekijken' }];
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
                <BlankPage desc="Some text description">
                    <Grid container spacing={3}>
                        <Grid item xs={1} md={0} />
                        <Grid item xs={9} md={12}>
                            <Grid container>
                                {datas.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Grid item xs={12} sm={4} key={index}>
                                        <RectangleBlock data={data}>
                                            Content
                                        </RectangleBlock>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>
                        <Grid item xs={1} md={0} />
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={0} md={1} />
                        <Grid item xs={0} md={10}>
                            <Grid container>
                                <Grid item md={1} xs={0} />
                                <Grid item xs={12} md={5} sm={5}>
                                    <MessagesList data={MessagesData} />
                                </Grid>
                                <Grid item md={2} xs={0} sm={2} />
                                <Grid item xs={12} md={4} sm={5}>
                                    <OffersList data={UserData} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </BlankPage>
            </div>
        );
    }
}

export default CompaniesDashBoard;
