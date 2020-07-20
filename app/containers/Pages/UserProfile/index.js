import React from "react";
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
import { Select, TextField, Grid, Typography, IconButton, InputBase, Divider } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { ProfileWrapper, useStyles, Figcaption, FormField, ProfilNavBar, ProfilePhotoWrapper, ButtonsContainer } from "./style";
import cssButtons from 'dan-styles/Buttons.scss'
import SearchIcons from "../../UiElements/IconGallery/SearchIcons";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

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
    file: null
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

  render() {
    const title = brand.name + " - Profile";
    const description = brand.desc;
    const { classes } = this.props;
    const {
      value,
      file, salutation,
      first_name, company_name,
      telephone_number, street,
      house_number, postcode, city,
      land, email, photo, oldPassword,
      newPassword, kvk_number
    } = this.state;
    let base64Img = dummy.user.avatar;

    if (file) {
      base64Img = URL.createObjectURL(file);
    }

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
          <ProfilNavBar>
            <Button
              size="small"
              className={classes.buttonLink}
              to="/new-offer" // todo: make sure there is a new-offer comp.
            >
              nieuw offerte
              <Icon className={classes.icon}>arrow_forward</Icon>
            </Button>
          </ProfilNavBar>
          <ProfilePhotoWrapper>
            <img src={base64Img} alt="" />

            <Figcaption>
              Profielfoto
              <Button
                size="small"
                className={classes.buttonLink}
                onClick={this.profilePhotoChange}
              >

                <Dropzone
                  onDrop={acceptedFiles => this.setState({ file: acceptedFiles[0] })}
                  accept="image/*"
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <CreateIcon fontSize="small" htmlColor="#818181" />
                        <span>Wijzigen</span>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Button>
            </Figcaption>
          </ProfilePhotoWrapper>
          <Grid container spacing={3} style={{ marginTop: "50px" }}>
            <Grid xs={12} sm={2} className={classes.padding1}>
              <Typography className={classes.label} variant="button">
                Aanhef
              </Typography>
              <FormField>
                <FormControl variant="outlined" className="formControl">
                  <InputLabel htmlFor="outlined-age-native-simple">Gekozen Item</InputLabel>
                  <Select
                    native
                    value={salutation}
                    className={"formControl selectView "}
                    placeholder="Dhr."
                    onChange={(e) => {
                      let salutation = e.target.value;
                      this.setState({ salutation });
                    }}
                    label="Gekozen Item"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option className='option' value="Dhr.">Dhr.</option>
                    <option className='option' value="Mvr.">Mvr.</option>
                  </Select>
                </FormControl>
              </FormField>
            </Grid>
            <Grid sm={3} xs={12} >
              <Typography className={classes.label} variant="button">
                Naam
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="Hans"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={first_name}
                onChange={(e) => {
                  let first_name = e.target.value;
                  this.setState({ first_name });
                }}
              />
            </Grid>

            <Grid sm={5} xs={12} className={classes.margin2Left}>
            <Typography className={classes.label} variant="button">
                Bedrijfsnaam
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="Superkeukens"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={company_name}
                onChange={(e) => {
                  let company_name = e.target.value;
                  this.setState({ company_name });
                }}
              />
            </Grid>
            <Grid sm={4} xs={12} className={classes.padding1}>
              <Typography className={classes.label} variant="button">
                Adres
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="Romorkstraat"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={street}
                onChange={(e) => {
                  let street = e.target.value;
                  this.setState({ street });
                }}
              />
            </Grid>
            <Grid sm={1} xs={12}>
              <Typography className={classes.label} variant="button">
                Huisnur.
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="1"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={house_number}
                onChange={(e) => {
                  let house_number = e.target.value;
                  this.setState({ house_number });
                }}
              />
            </Grid>
            <Grid sm={5} xs={12} className={classes.margin2Left}>
              <Typography className={classes.label} variant="button">
                Telefon
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="+31621816448"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={telephone_number}
                onChange={(e) => {
                  let telephone_number = e.target.value;
                  this.setState({ telephone_number });
                }}
              />
            </Grid>
            <Grid sm={2} xs={12} className={classes.padding1}>
              <Typography className={classes.label} variant="button">
                Postcode
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="1034 LE"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={postcode}
                onChange={(e) => {
                  let postcode = e.target.value;
                  this.setState({ postcode });
                }}
              />
            </Grid>

            <Grid sm={3} xs={12}>
              <Typography className={classes.label} variant="button">
                Woonplaats
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="Amsterdam"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={city}
                onChange={(e) => {
                  let city = e.target.value;
                  this.setState({ city });
                }}
              />
            </Grid>

            <Grid sm={4} xs={12} className={classes.margin1Left}>
              <Typography className={classes.label} variant="button">
                Land
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="Nederland"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={land}
                onChange={(e) => {
                  let land = e.target.value;
                  this.setState({ land });
                }}
              />
            </Grid>
          </Grid>
          <Divider className={classes.divider} variant='fullWidth' component='hr' />
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid sm={5} xs={12}>
              <Typography className={classes.label} variant="button">
                E-mail
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder="info@ideastudio.nl"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={email}
                onChange={(e) => {
                  let email = e.target.value;
                  this.setState({ email });
                }}
              />
            </Grid>
            <Grid sm={7} xs={0} />

            <Grid sm={5} xs={12}>
              <Typography className={classes.label} variant="button">
                Huidige wachtwoord
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={oldPassword}
                onChange={(e) => {
                  let oldPassword = e.target.value;
                  this.setState({ oldPassword });
                }}
              />
            </Grid>
            <Grid sm={5} xs={12} className={classes.marginLeftNormal}>
              <Typography className={classes.label} variant="button">
                Nieuwe wachtwoord
              </Typography>
              <TextField
                id="outlined-full-width"
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.paper}
                InputLabelProps={{
                  shrink: true,
                }}
                value={newPassword}
                onChange={(e) => {
                  let newPassword = e.target.value;
                  this.setState({ newPassword });
                }}
              />
            </Grid>
          </Grid>
          <Grid  className={classes.link} >
            <Link style={{color:'#ff6600'}} to="/reset-password" >Wachtwoord vergeten?</Link>
          </Grid>
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
