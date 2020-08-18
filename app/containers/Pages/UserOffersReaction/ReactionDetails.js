import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pdfImage from "../../../../images/pdf.svg";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "@material-ui/core";
import { DetailsContainer } from "./style";

const ReactionDetails = (props) => {
  let bidData = props.bid_data ? props.bid_data : null;
  console.log(bidData);
  return (
    <div>
      <DetailsContainer>
        <h1>Bieding</h1>
        <div className="blueDiv">
          <span>
            {bidData ? bidData.createdAt.split("T")[0] : ""} &nbsp;om{" "}
            {bidData ? bidData.createdAt.split("T")[1].split(".")[0] : ""}{" "}
            &nbsp;uur
          </span>
          <h1>€ {bidData ? bidData.bid : ""},-</h1>
        </div>
        <div className="lightBlueDiv">
          {bidData&&bidData.files
            ? JSON.parse(bidData.files).map((element, index) => {
                return (
                  <div className="firstDiv" key={index}>
                    <img src={pdfImage} />
                    file{index + 1}
                  </div>
                );
              })
            : ""}
          <div className="lastDiv">
            <span>Ga naar reacties</span>
            <div className="oval">1</div>
          </div>
        </div>
        <div className="middleContainer">
          <span>Heeft u een vraag of wilt u meer informatie?</span>
          <Button
            variant="outlined"
            color="primary"
            className="button"
            endIcon={<MessageIcon />}
          >
            STUUR EEN BERICHT
          </Button>
        </div>

        <div className="lastContainer">
          <div className="contentLast">
            <span>Wilt u het bod vrijblijvend accepteren?</span>
            <Button
              variant="contained"
              color="primary"
              className="button"
              size="large"
            >
              BOOD ACCEPTEREM
            </Button>
          </div>
        </div>
      </DetailsContainer>
    </div>
  );
};

export default ReactionDetails;
