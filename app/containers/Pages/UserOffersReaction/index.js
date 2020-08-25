import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import ReactionDetails from "./ReactionDetails";
import CompaniesProfile from "./CompaniesProfile";
import BlankPage from "../BlankPage";

import styled from "styled-components";
import button from "dan-styles/Buttons.scss";
import { getBidInfo } from "../../../data/data";

const HedearText = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  line-height: 0.58;
  font-family: openSans;
  letter-spacing: normal;
  margin-bottom: 20px;
  & .text-style-1 {
    color: #0090e3;
  }
`;

const UserOffersReactions = (props) => {
  const [bidData, setBidData] = useState(null);
  useEffect(() => {
    console.log(props.match.params.id);
    let data = {
      bidId: props.match.params.id,
    };
    getBidInfo(data).then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res.data);
      setBidData(res.data);
    });
  }, []);
  return (
    <BlankPage>
      <div>
        <HedearText>
          <span className="text-style-1">Offertereactie: </span>
          {bidData ? bidData.profile.company_name : ""}
        </HedearText>
        <Grid container spacing={3}>
          <Grid xs={12} md={5} item>
            <ReactionDetails bid_data={bidData} />
          </Grid>
          <Grid xs={12} md={5} item>
            <CompaniesProfile bid_data={bidData} />
          </Grid>
        </Grid>
      </div>
    </BlankPage>
  );
};

export default UserOffersReactions;
