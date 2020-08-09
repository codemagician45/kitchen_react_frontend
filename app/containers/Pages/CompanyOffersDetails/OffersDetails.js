import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pdfImage from "../../../../images/pdf.svg";

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
    margin-top: 20px;
    div {
      width: 80px;
      font-weight: bold;
      color: #000000;
      line-height: 1.35;
    }
  }
`;
const OffersDetails = (props) => {
  console.log(props.offer_data ? JSON.parse(props.offer_data.old_files) : "");
  return (
    <div>
      <DetailsContainer>
        <div className="list-item">
          <div>Type:</div>
          {props.offer_data ? props.offer_data.type : ""}
        </div>
        <div className="list-item">
          <div>Datum:</div>
          {props.offer_data ? props.offer_data.createdAt.split("T")[0] : ""}
        </div>
        <div className="list-item">
          <div>Prijs:</div>€ 12.450 ( of n.v.t )
        </div>
        {props.offer_data
          ? JSON.parse(props.offer_data.old_files).map((element, index) => {
              return (
                <div className="list-item" index={index}>
                  <div>Item{index + 1}:</div>
                  file{index + 1}
                </div>
              );
            })
          : ""}
      </DetailsContainer>
    </div>
  );
};

export default OffersDetails;
