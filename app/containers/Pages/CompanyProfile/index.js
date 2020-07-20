import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CreateIcon from "@material-ui/icons/Create";
//
//
import dummy from "dan-api/dummy/dummyContents";
import { withStyles } from "@material-ui/core/styles";
import styles from "dan-components/SocialMedia/jss/cover-jss";
// form fields..
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select, TextField, Grid, Typography, IconButton, InputBase, Divider, Tabs, Tab } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { ProfileWrapper, useStyles, Figcaption, FormField, ProfilNavBar, ProfilePhotoWrapper, ButtonsContainer } from "./style";
import cssButtons from 'dan-styles/Buttons.scss'
import SearchIcons from "../../UiElements/IconGallery/SearchIcons";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import SeconComponent from "./SeconComponent";
import ThirdComponent from "./ThirdComponent";

function TabContainer(props) {
  const { children } = props;
  return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class UserProfile extends React.Component {
  state = {
    value: 0,
    photo: null,
    salutation: '',
    first_name: '',
    kvk_number: '',
    surname: '',
    company_name: '',
    telephone_number: '',
    street: '',
    house_number: '',
    postcode: '',
    city: '',
    land: '',
    photo: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    file: null,
    services: []
  };

  componentDidMount() {

  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  // todo: implement this to change profile photo
  profilePhotoChange = () => {
    this.state.file.click();
  };
  handleFile = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.files[0] });
  };

  // todo: implement this to change submit new user infos
  handleSubmit = () => {
    console.log("comming soon");
  };

  handleState = (state) => {
    this.setState(state);
  }

  render() {
    const title = brand.name + " - Profile";
    const description = brand.desc;
    const { classes } = this.props;
    const { value } = this.state;


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
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="GEGEVENS" />
            <Tab label="INSTELLINGEN" />
            <Tab label="FACTUREN" />
          </Tabs>
          {value === 0 && <FirstComponent state={this.state} classes={classes} handleState={this.handleState} />}
          {value === 1 && <SeconComponent state={this.state} classes={classes} handleState={this.handleState} />}
          {value === 2 && <ThirdComponent state={this.state} classes={classes} handleState={this.handleState} />}


          <ButtonsContainer>
            <Button
              variant="contained"
              color="default"
              className={classes.button + " " + cssButtons.backButton}
            >
              Anulleren
           </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button + " " + cssButtons.seeButton}
              endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
            >
              OPSLAAN
            </Button>
          </ButtonsContainer>
        </ProfileWrapper>



      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(useStyles)(UserProfile);
