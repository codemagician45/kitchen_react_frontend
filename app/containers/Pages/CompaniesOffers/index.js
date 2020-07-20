/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { Grid, Tabs, Tab } from "@material-ui/core";

import css from "dan-styles/TableHeader.scss";

import BlankPage from "../BlankPage";
import CompanyNiewOffersTable from "../../Tables/kitchen/CompanyNiewOffersTable";
import CompanyArrangedTable from "../../Tables/kitchen/CompanyArrangedTable";
import CompanyFinishedTable from "../../Tables/kitchen/CompanyFinishedTable";
import CompanyOffersTable from "../../Tables/kitchen/CompanyOffersTable";

import { companyOffers } from "../../../data/data";

class CompaniesOffers extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    companyOffers().then((res) => {
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const title = brand.name + " - Blank Page";
    const { value } = this.state;
    const description = brand.desc;
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
        <BlankPage desc="Some text description">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="NIEUW" />
            <Tab label="MIJN OFFERTES" />
            <Tab label="GEREAGEERD" />
            <Tab label="AFGEHANDELD" />
          </Tabs>

          <hr />
          {value === 0 && (
            <CompanyNiewOffersTable history={this.props.history} />
          )}
          {value === 1 && <CompanyArrangedTable history={this.props.history} />}
          {value === 2 && <CompanyOffersTable history={this.props.history} />}

          {value === 3 && <CompanyFinishedTable history={this.props.history} />}
        </BlankPage>
      </div>
    );
  }
}

export default CompaniesOffers;
