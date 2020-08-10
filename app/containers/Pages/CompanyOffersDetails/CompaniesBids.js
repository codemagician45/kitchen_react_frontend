import React, { useState, useEffect } from "react";
import pdfImage from "../../../../images/pdf.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import { fileDownload } from "../../../data/data";

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

const CompaniesBids = (props) => {
  console.log(props.offer_data);
  let files = props.offer_data ? JSON.parse(props.offer_data.files) : [];

  const download = (element) => {
    console.log(element, typeof element);
    let data = {
      file: element,
    };
    fileDownload(data).then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am download", res);
      const url = window.URL.createObjectURL(
        new Blob([res.data], {
          type: "image/pdf",
        })
      );
      console.log("link", url);

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", element.split("/")[3]);

      // document.body.appendChild(link);

      link.click();
    });
  };
  return (
    <div>
      <Rectangle>
        <div className="headerReactangle">Bestanden</div>
        {files.map((element, index) => {
          return (
            <div className="offersList" key={index}>
              <div className="firstDiv">
                <img src={pdfImage} />
              </div>
              <div className="secondDiv">file{index + 1}</div>
              <div className="lastDiv">
                <span onClick={() => download(element)}>Download</span>
                {/* <span>Bekijken</span> */}
                {/* <span> Vervijderen</span> */}
              </div>
            </div>
          );
        })}
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
    </div>
  );
};

export default CompaniesBids;
