import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pdfImage from "../../../../images/pdf.svg";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "@material-ui/core";
import { DetailsContainer } from "./style";
import { fileDownload } from "../../../data/data";

const ReactionDetails = (props) => {
  let bidData = props.bid_data ? props.bid_data : null;
  console.log(bidData);

  const download = (file, index) => {
    console.log(file);
    if (file) {
      let download_files = JSON.parse(file);
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

          if (index === 1) link.setAttribute("download", element.split("/")[3]);
          else link.setAttribute("download", element.split("/")[4]);

          link.click();
        });
      });
    }
  };
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
          {bidData && bidData.files ? (
            <div className="firstDiv">
              <img
                src={pdfImage}
                onClick={() => download(bidData.offer.files, 1)}
              />
              new file
            </div>
          ) : (
            ""
          )}
          <div className="lastDiv">
            <span onClick={() => download(bidData.files, 2)}>
              Ga naar reacties
            </span>
            {/* <div className="oval">1</div> */}
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
