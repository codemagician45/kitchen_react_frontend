import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
// form fields..
import { Tabs, Tab, withStyles } from "@material-ui/core";
import { ProfileWrapper, useStyles } from "./style";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

function TabContainer(props) {
  const { children } = props;
  return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const UserProfile = (props) => {
  const title = brand.name + " - Profile";
  const description = brand.desc;
  const { classes } = props;
  const [tab, setTab] = useState(0);

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

      <ProfileWrapper>
        <Tabs value={tab} onChange={(e, value) => setTab(value)} centered>
          <Tab label="GEGEVENS" />
          <Tab label="INSTELLINGEN" />
          <Tab label="FACTUREN" />
        </Tabs>
        {tab === 0 && <FirstComponent classes={classes} />}
        {tab === 1 && <SecondComponent classes={classes} />}
        {tab === 2 && <ThirdComponent classes={classes} />}
      </ProfileWrapper>
    </div>
  );
};

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(UserProfile);
