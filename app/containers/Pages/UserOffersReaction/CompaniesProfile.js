import React, { useState, useEffect } from "react";
import Image from "./example.png";
import { Rectangle } from "./style";
import config from "../../../actions/config";
import { withRouter } from "react-router-dom";

const CompaniesProfile = (props) => {
  let bid_data = props.bid_data;
  console.log(props);

  const handleClick = () => {
    props.history.push("/users/messages");
  };
  return (
    <Rectangle>
      <h1>Bedrijsprofiel</h1>
      <img
        src={
          bid_data
            ? bid_data.profile.photo
              ? config.fetchLinkUrl + bid_data.profile.photo
              : Image
            : ""
        }
      />
      {/* <h1>Over Keukenconcurrent</h1> */}
      <div className="openWorks">
        <span>
          {bid_data && bid_data.settings ? bid_data.settings.opening_hours : ""}
        </span>
      </div>
      <h2>
        {bid_data && bid_data.settings ? bid_data.settings.website : <br />}
      </h2>
      <div className="openWorks">
        <span>
          {bid_data && bid_data.settings ? bid_data.settings.reviews : <br />}
        </span>
      </div>
      <div className="openWorks">
        <span>
          {bid_data && bid_data.settings ? bid_data.settings.services : <br />}
        </span>
      </div>
      <div className="openWorks">
        <span>
          {bid_data && bid_data.settings ? (
            bid_data.settings.about_company
          ) : (
            <br />
          )}
        </span>
      </div>
      <div className="bottomFix">
        <hr />
        <h1 onClick={handleClick}>Afspraken</h1>U heeft nog geen afspraken.
      </div>
    </Rectangle>
  );
};

export default withRouter(CompaniesProfile);
