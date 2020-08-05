/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { Grid } from "@material-ui/core";
import BlankPage from "../BlankPage";
import OffersListKlantTable from "../../Tables/kitchen/OffersListKlantTable";

const UserOffers = (props) => {

  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  // const datas = [
  //   { number: 3, title: "Offerte", link: "Bekijken" },
  //   { number: 5, title: "Berichten", link: "Bekijken" },
  //   { number: 0, title: "BEOORDELING", link: "Bekijken" },
  // ];
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
        <OffersListKlantTable history={props.history} />
      </BlankPage>
    </div>
  );
};

export default UserOffers;
