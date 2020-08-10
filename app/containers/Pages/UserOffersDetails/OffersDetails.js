import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pdfImage from "../../../../images/pdf.svg";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";
import Dropzone from "react-dropzone";

const Rectangle = styled.div`
  // height: 228px;
  border-radius: 20px;
  border: solid 1px #0090e3;
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;

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
      margin-left: 20px !important;
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

const DetailsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  & .list-item {
    font-size: 17px;
    font-weight: 600;
    text-align: left;
    display: flex;
    letter-spacing: normal;
    line-height: 1.35;
    letter-spacing: 2px;
    margin-top: 10px;
    div {
      width: 80px;
      font-weight: bold;
      color: #000000;
      line-height: 1.35;
    }
  }
`;
const OffersDetails = (props) => {
  const offer_data = props.offer_data;
  console.log("offer_data", offer_data)
  // const item_list = (files) => {
  //   console.log("item list", files);
  //   if (files.length) {
  //     let file_array = JSON.parse(files);
  //     console.log(file_array);
  //     file_array.map((element, index) => {
  //       console.log("asfdsf", index);
  //       return (
  //         <div className="list-item">
  //           <div>Item{index + 1}:</div>
  //           Omschrijving van item
  //         </div>
  //       );
  //     });
  //   }
  // };
  return (
    <div>
      <DetailsContainer>
        <div className="list-item">
          <div>Type:</div>
          {offer_data.length ? offer_data[0].type : ""}
        </div>
        <div className="list-item">
          <div>Datum:</div>
          {offer_data.length ? offer_data[0].createdAt.split("T")[0] : ""}
        </div>
        <div className="list-item">
          <div>Prijs:</div>
          {/* € 12.450 ( of n.v.t ) */}
        </div>
        {offer_data.length
          ? JSON.parse(offer_data[0].old_files).map((element, index) => {
              return (
                <div className="list-item" key={index}>
                  <div>Item{index + 1}:</div>
                  file{index+1}
                </div>
              );
            })
          : ""}
      </DetailsContainer>
      <Rectangle>
        <div className="headerReactangle">Bestanden</div>
        {offer_data.length
          ? JSON.parse(offer_data[0].old_files).map((element, index) => {
              return (
                <div className="offersList">
                  <div className="firstDiv">
                    <img src={pdfImage} />
                  </div>
                  <div className="secondDiv">file{index+1}</div>
                  <div className="lastDiv">
                    <span>Bekijken</span>
                    <span> Vervijderen</span>
                  </div>
                </div>
              );
            })
          : ""}
        {/* <div className="offersList">
          <div className="firstDiv">
            <img src={pdfImage} />
          </div>
          <div className="secondDiv">Offerte 12-02-2019.pdf</div>
          <div className="lastDiv">
            <span>Bekijken</span>
            <span> Vervijderen</span>
          </div>
        </div> */}
        <div />
      </Rectangle>
    </div>
  );
};

export default OffersDetails;
