import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import OffersDetails from "./OffersDetails";
import CompaniesBids from "./CompaniesBids";
import NewOffer from "./NewOffer";
import BidData from "./BidData";
import BlankPage from "../BlankPage";

import styled from "styled-components";
import button from "dan-styles/Buttons.scss";
import { userOfferDetailGet } from "../../../data/data";

const HedearText = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  line-height: 1.3;
  font-family: openSans;
  letter-spacing: normal;
  margin-bottom: 20px;
  & .text-style-1 {
    color: #0090e3;
  }
`;

const HedearText1 = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  line-height: 1.3;
  font-family: openSans;
  letter-spacing: normal;
  margin-bottom: 10px;
  & .text-style-1 {
    color: #0090e3;
  }
`;

const CompanyOffersDetails = (props) => {
  const [offerData, setOfferData] = useState(null);
  useEffect(() => {
    let id = props.match.params.id;
    console.log(id);
    userOfferDetailGet(id).then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res.data);
      setOfferData(res.data[0]);
    });
  }, []);
  const renderStatus = (status) => {
    let name = status + "Button";
    return (
      <Button variant="contained" color="" className={button[name]}>
        {status.toUpperCase()}
      </Button>
    );
  };
  return (
    <BlankPage>
      <div>
        <HedearText>
          <span className="text-style-1">Offertedetails: </span>
          {offerData ? offerData.name : ""}
        </HedearText>
        {renderStatus(offerData ? offerData.status : "")}
        <Grid container spacing={3}>
          <Grid xs={12} md={4} item>
            <OffersDetails history={props.history} offer_data={offerData} />
          </Grid>
          <Grid xs={12} md={6} item>
            <CompaniesBids history={props.history} offer_data={offerData} />
          </Grid>
        </Grid>
        <HedearText1>
          <span className="text-style-1">Nieuwe bod voor deze offerte</span>
        </HedearText1>
        <Grid container spacing={3}>
          <Grid xs={12} md={5} item>
            {offerData ? (
              offerData.attend_id ? (
                <BidData bid_data={offerData.bid[0]} />
              ) : (
                <NewOffer
                  history={props.history}
                  offer_id={offerData ? offerData.id : ""}
                />
              )
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </div>
    </BlankPage>
  );
};

export default CompanyOffersDetails;
