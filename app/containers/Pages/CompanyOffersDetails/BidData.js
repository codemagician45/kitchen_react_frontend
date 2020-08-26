import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { fileDownload } from "../../../data/data";

const DetailsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 150px;
  border-radius: 20px;
  background-color: #b3fce8;
  padding: 40px;
  & .input-part {
    background-color: white;
    border-radius: 7px;
    border: 1px #b9b9b9;
  }

  & .uploadButton {
    background-color: #0090e3;
    color: white;
    margin-bottom: 5px;
  }
  & .button-part {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  & .download {
    margin-top: 5px;
    background-color: #ff6600;
    color: white;
    width: 100%;
  }
`;

const BidData = (props) => {
  console.log(props);

  const download = () => {
    let download_files = JSON.parse(props.bid_data.files);
    download_files.map((element) => {
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

        link.setAttribute("download", element.split("/")[4]);

        link.click();
      });
    });
  };

  return (
    <div>
      <DetailsContainer>
        <Grid container>
          <Grid md={6} item>
            <h2>Bid Prijs:</h2>
          </Grid>
          <Grid md={6} item>
            <span>{props.bid_data.bid}€</span>
          </Grid>
        </Grid>
        <Grid container>
          <Button className="download" onClick={download}>
            Download
          </Button>
        </Grid>
      </DetailsContainer>
    </div>
  );
};

export default BidData;
