import React from "react";
import pdfImage from "../../../../images/pdf.svg";
import styled from "styled-components";
import dummy from "dan-api/dummy/dummyContents";
import config from "../../../actions/config";
import { fileDownload } from "../../../data/data";

const Rectangle = styled.div`
  border-radius: 20px;
  border: solid 1px #0090e3;
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  height: 100%;
  margin-left: 25%;
  & h1 {
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #0090e3;
    margin-left: 20px;
  }
  @media screen and (max-width: 961px) {
    margin-top: 30px;
    margin-left: 0px;
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
    font-size: 14px;
    justify-content: space-around;
    .firstDiv {
      img {
        height: 40px;
        margin-right: 10px;
      }
      font-weight: 600;
    }

    .secondDiv {
      margin-left: "20px !important";
      span {
        display: block;
        &:last-child {
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.36;
          letter-spacing: normal;
          color: #ff6600;
          margin-right: 5px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .lastDiv {
      float: right;
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
const CompaniesBids = (props) => {
  console.log("props", props.offer_data);
  let offer_data = props.offer_data;

  const download = (file) => {
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

          link.setAttribute("download", element.split("/")[4]);

          link.click();
        });
      });
    }
  };

  let user_type = JSON.parse(localStorage.getItem("user")).type;

  const handleClick = (element) => {
    console.log(element.files);
    if (user_type === "admin") download(element.files);
    else props.history.push(`/users/reactions/${element.id}`);
  };
  return (
    <Rectangle>
      <h1>Biedingen van bedrijven</h1>
      {offer_data.length
        ? offer_data[0].bid.map((element, index) => {
            console.log(element);
            if (element.bid)
              return (
                <div className="offersList" key={index}>
                  <div className="firstDiv">
                    <img
                      src={
                        element.photo
                          ? `${config.fetchLinkUrl}${element.photo}`
                          : dummy.user.avatar
                      }
                      alt=""
                      style={{ borderRadius: "5px" }}
                    />
                  </div>

                  <div className="secondDiv">
                    <span>{element.company_name}</span>
                    <span>€ {element.bid}</span>
                  </div>
                  <div className="lastDiv">
                    <span onClick={() => handleClick(element)}>
                      {user_type === "admin" ? "Download" : "Bekijkens"}
                    </span>
                  </div>
                </div>
              );
          })
        : ""}
      {/* <div className="offersList">
        <div className="firstDiv">
          <img src={pdfImage} />
        </div>

        <div className="secondDiv">
          <span>Keukenconcurrent</span>
          <span>€ 9.950</span>
        </div>
        <div className="lastDiv">
          <span
            onClick={() => {
              this.props.history.push("/users/reactions/1");
            }}
          >
            Bekijken
          </span>
        </div>
      </div> */}
    </Rectangle>
  );
};

export default CompaniesBids;
