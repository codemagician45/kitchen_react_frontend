/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { Grid } from "@material-ui/core";
import BlankPage from "../BlankPage";
import OffersListKlantTable from "../../Tables/kitchen/OffersListKlantTable";
import { userOffers } from "../../../data/data";

class UserOffers extends React.Component {
  componentDidMount() {
    userOffers().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      console.log("I am here", res);
      this.setState({ info: res });
    });
  }

  render() {
    const title = brand.name + " - Blank Page";
    const description = brand.desc;
    const datas = [
      { number: 3, title: "Offerte", link: "Bekijken" },
      { number: 5, title: "Berichten", link: "Bekijken" },
      { number: 0, title: "BEOORDELING", link: "Bekijken" },
    ];
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <BlankPage desc="Some text description" link="/users/newOffer">
          <OffersListKlantTable history={this.props.history} />
        </BlankPage>
      </div>
    );
  }
}

export default UserOffers;
