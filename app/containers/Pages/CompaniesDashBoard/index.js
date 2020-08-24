/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { OffersList, MessagesList, RectangleBlock } from "dan-components";
import { Grid } from "@material-ui/core";
import BlankPage from "../BlankPage";
import { companyDashboard } from "../../../data/data";

const CompaniesDashBoard = () => {
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

  const MessagesData = [
    createData(false, "Klant A.Brouwer - Offerte 2019 ", "Tot ziens.."),
    createData(false, "Klant A.Brouwer - Offerte 2019 ", "is aan het typen"),
    createData(false, "Klant A.Brouwer - Offerte 2019 ", "is aan het typen"),
  ];

  const [countData, setCountData] = useState([]);
  const [offerData, setOfferData] = useState([]);

  useEffect(() => {
    companyDashboard().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res.data);
      let count_data = [
        {
          number: res.data.activeOffersCount,
          title: "Nieuwe offertes",
          link: "Bekijken",
          url: "/companies/offers",
        },
        {
          number: res.data.paidBidOfferCount,
          title: "Mijn offertes",
          link: "Bekijken",
          url: "/companies/offers",
        },
        {
          number: res.data.attendedOfferCount,
          title: "Afspraken",
          link: "Bekijken",
          url: "/companies",
        },
      ];

      setCountData(count_data);

      let offer_data = [];
      res.data.last2Offer.map((element) => {
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
      <BlankPage desc="Some text description">
        <Grid container spacing={3}>
          <Grid item xs={1} md={0} />
          <Grid item xs={9} md={12}>
            <Grid container>
              {countData.map((data, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item xs={12} sm={4} key={index}>
                  <RectangleBlock data={data}>Content</RectangleBlock>
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

export default CompaniesDashBoard;
