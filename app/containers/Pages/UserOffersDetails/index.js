import React, { Component, useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import OffersDetails from "./OffersDetails";
import CompaniesBids from "./CompaniesBids";
import BlankPage from "../BlankPage";

import styled from "styled-components";
import button from "dan-styles/Buttons.scss";

import { userOfferDetailGet } from "../../../data/data";

const HedearText = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  line-height: 1.3;
  // line-height:0.58;
  font-family: openSans;
  letter-spacing: normal;
  margin-bottom: 20px;
  & .text-style-1 {
    color: #0090e3;
  }
`;

const UserOffersDetails = (props) => {
  const [offerDetailData, setOfferDetailData] = useState([]);
  useEffect(() => {
    userOfferDetailGet(props.match.params.id).then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res);
      setOfferDetailData(res.data);
    });
  }, []);
  const renderStatus = (status) => {
    console.log(status)
    if (status) {
      console.log(status)
      let name = status + "Button";
      return (
        <Button variant="contained" color="" className={button[name]}>
          {status.toUpperCase()}
        </Button>
      );
    }
  };
  console.log("I am here1111", offerDetailData)
  return (
    <BlankPage>
      <div>
        <HedearText>
          <span className="text-style-1">Offertedetails: </span>
          {offerDetailData.length?offerDetailData[0].name:""}
        </HedearText>
        {renderStatus(offerDetailData.length?offerDetailData[0].status:"")}
        <Grid container spacing={3}>
          <Grid xs={12} md={5} item>
            <OffersDetails
              history={props.history}
              offer_data={offerDetailData}
            />
          </Grid>
          <Grid xs={12} md={5} item>
            <CompaniesBids
              history={props.history}
              offer_data={offerDetailData}
            />
          </Grid>
        </Grid>
      </div>
    </BlankPage>
  );
};

export default UserOffersDetails;
