import React, { Component } from "react";
import pdfImage from "../../../../images/pdf.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";

const Rectangle = styled.div`
  height: 170px;
  border-radius: 20px;
  border: solid 1px #0090e3;
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  margin-left: 10%;

  @media only screen and (min-width: 450px) and (max-width: 959.95px) {
    margin-right: 10% !important;
  }

  @media (max-width: 450px) {
    margin: 0 !important;
  }

  & .headerReactangle {
    font-size: 24px;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.58;
    letter-spacing: normal;
    text-align: left;
    color: #0090e3;
  }

  & .offersList {
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .firstDiv {
      img {
        height: 40px;
        margin-right: 10px;
      }
      font-weight: 600;
    }
    .secondDiv {
      margin-left: 20px;
    }
    .lastDiv {
      span {
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: center;
        color: #ff6600;
        margin-right: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Sentemail = styled.div`
  margin-left: 10%;

  & .middleContainer {
    display: inline-block;
    padding: 50px;
    margin-left: 10%;
    margin-right: 5%;

    @media screen and (max-width: 450px) {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    @media screen and (max-width: 1261px) {
      margin-left: 0px;
    }

    div,
    .button {
      margin-left: 20px;
      margin-top: 20px;
      justify-content: space-around;
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      text-align: center;
      color: #0090e3;
      width: 244px;
      height: 41px;
      border-radius: 18px;
      border: solid 1px #0090e3;
    }
  }
`;

export default class CompaniesBids extends Component {
  render() {
    return (
      <>
        <Rectangle>
          <div className="headerReactangle">Bestanden</div>
          <div className="offersList">
            <div className="firstDiv">
              <img src={pdfImage} />
            </div>
            <div className="secondDiv">Offerte 12-02-2019.pdf</div>
            <div className="lastDiv">
              <span>Bekijken</span>
              <span> Vervijderen</span>
            </div>
          </div>
          <div />
        </Rectangle>
        <Sentemail>
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
        </Sentemail>
      </>
    );
  }
}
