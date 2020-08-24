/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { Grid } from "@material-ui/core";
import { RectangleBlock, OffersList, MessagesList } from "dan-components";
import BlankPage from "../BlankPage";
import { userDashboard } from "../../../data/data";

const UsersDashBoard = () => {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const datas = [
    { number: 3, title: "Offerte", link: "Bekijken" },
    { number: 5, title: "Berichten", link: "Bekijken" },
    { number: 0, title: "BEOORDELING", link: "Bekijken" },
  ];

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

  const messagesData = [
    createData("logo", "Keukenconcurrent", "Tot ziens.."),
    createData("logo", "Superkeukens", "is aan het typen"),
    createData("logo", "Superkeukens", "is aan het typen"),
  ];

  const [countData, setCountData] = useState([]);
  const [offerData, setOfferData] = useState([]);

  useEffect(() => {
    userDashboard().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res.data);
      let data = [
        {
          number: res.data.offersCount,
          title: "Offerte",
          link: "Bekijken",
          url: "/users/offers",
        },
        {
          number: res.data.totalActiveOfferBidsCount,
          title: "Berichten",
          link: "Bekijken",
          url: "/users/messages",
        },
        {
          number: res.data.attendedOffersCount,
          title: "BEOORDELING",
          link: "Bekijken",
          url: "/users",
        },
      ];

      setCountData(data);

      let offer_data = [];
      res.data.lastOffers.map((element) => {
        let element_data = {
          name: element.name,
          date: element.createdAt.split("T")[0],
          reactions: element.reactionCount,
        };
        offer_data.push(element_data);
      });
      setOfferData(offer_data);
    });
  }, []);
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
        <Grid container spacing={3}>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={9}>
            <Grid container>
              {countData.map((data, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item xs={12} md={4} key={index}>
                  <RectangleBlock data={data}>Content</RectangleBlock>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item md={1} xs={0} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={9}>
            <Grid container>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5}>
                <MessagesList data={messagesData} />
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item md={5} xs={12}>
                <OffersList data={offerData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </BlankPage>
    </div>
  );
};

export default UsersDashBoard;
