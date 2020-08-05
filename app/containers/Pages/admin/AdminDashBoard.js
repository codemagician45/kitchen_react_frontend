/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { Grid, withStyles, makeStyles } from "@material-ui/core";
import { OffersList, MessagesList, RectangleBlock } from "dan-components";
import BlankPage from "../BlankPage";
import { adminDashBoardCounts } from "../../../data/data";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const AdminDashBoard = () => {
  const [rectangleData, setRectangleData] = useState([]);
  const [offersData, setOffersData] = useState([]);
  useEffect(() => {
    adminDashBoardCounts().then((res) => {
      if (res.data.isError || res.data.shouldLogin) {
        console.error("errors");
      }
      if (res.data.error) {
        console.error("error");
      }
      console.log("I am here", res);
      let card_data = [
        { number: res.data.offersCount, title: "Nieuwe offertes", link: "Bekijken" },
        { number: res.data.companiesCount, title: "Bedrijven", link: "Bekijken" },
        { number: res.data.clientCount, title: "Klanten", link: "Bekijken" },
        { number: res.data.reactionCount, title: "Reacties", link: "Bekijken" },
      ];
      setRectangleData(card_data);

      setOffersData(res.data.lastOffers)

    });
  }, []);

  const title = brand.name + " - Blank Page";
  const description = brand.desc;

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

  let id2 = 0;
  function createUserData(type, datum, reactions) {
    id2 += 1;
    return {
      id2,
      type,
      datum,
      reactions,
    };
  }

  const UserData = [
    createUserData("Modernkeuken 23", "18-08-2019", 3),
    createUserData("Modernkeuken 25", "18-08-2019", 3),
  ];

  const messagesData = [
    createData("logo", "Keukenconcurrent", "Tot ziens.."),
    createData("logo", "Superkeukens", "is aan het typen"),
    createData("logo", "Superkeukens", "is aan het typen"),
  ];
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
      <BlankPage desc="Some text description" link="/users/newOffer">
        <Grid container spacing={0}>
          <Grid item xs={11} md={12}>
            <Grid container>
              {rectangleData.map((data, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <RectangleBlock data={data}>Content</RectangleBlock>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={0} md={1} />
          <Grid item xs={0} md={10}>
            <Grid container>
              <Grid item md={1} xs={0} />
              <Grid item xs={12} md={5} sm={5}>
                <MessagesList data={messagesData} />
              </Grid>
              <Grid item md={2} xs={0} sm={2} />
              <Grid item xs={12} md={4} sm={5}>
                <OffersList data={offersData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </BlankPage>
    </div>
  );
};

export default AdminDashBoard;
