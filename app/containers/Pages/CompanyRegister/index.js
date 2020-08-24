import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CreateIcon from "@material-ui/icons/Create";
import dummy from "dan-api/dummy/dummyContents";
// form fields..
import {
  Select,
  TextField,
  Grid,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Button,
  Icon,
  Box,
} from "@material-ui/core";
import {
  Figcaption,
  FormField,
  ProfilNavBar,
  ProfilePhotoWrapper,
  ButtonsContainer,
} from "./style";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import cssButtons from "dan-styles/Buttons.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styles from "dan-components/Forms/user-jss";
import { withStyles } from "@material-ui/core/styles";

import { companyRegister } from "../../../data/data";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const CompanyRegister = (props) => {
  const { classes } = props;
  console.log(props);

  const [snackbarSatus, setSnackbarStatus] = useState({
    open: false,
    color: "",
    message: "",
  });

  const [photo, setPhoto] = useState("");
  const [salutation, setSalutation] = useState("Dhr.");
  const [firstName, setFirstName] = useState("");
  const [kvkNumver, setKvkNumber] = useState("");
  const [surname, setSurname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [passwordResult, setPasswordResult] = useState("");

  useEffect(() => {
    setPhoto(dummy.user.avatar);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file)
      setSnackbarStatus({
        open: true,
        color: "red",
        message: "Please upload profile photo",
      });
    else if (newPassword != confirmPassword)
      setSnackbarStatus({
        open: true,
        color: "red",
        message: "Please match your password",
      });
    else {
      let data = new FormData();
      data.append("email", email);
      data.append("password", newPassword);
      data.append("photo", file);
      let companyInfo = {
        salutation: salutation,
        name: firstName,
        kvk_number: kvkNumver,
        company_name: companyName,
        telephone_number: telephoneNumber,
        street: street,
        house_number: houseNumber,
        postcode: postCode,
        city: city,
        land: land,
      };
      data.append("companyInfo", JSON.stringify(companyInfo));

      companyRegister(data)
        .then((res) => {
          props.history.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const set_profile_photo = (data) => {
    setPhoto(URL.createObjectURL(data));
    setFile(data);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setSnackbarStatus({
        open: false,
        color: "",
        message: "",
      });
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "40px 90px" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarSatus.open}
        onClose={handleClose}
      >
        <SnackbarContent
          aria-describedby="message-id2"
          style={{ backgroundColor: snackbarSatus.color }}
          message={
            <span id="message-id2">
              <div>{snackbarSatus.message}</div>
            </span>
          }
        />
      </Snackbar>
      <ProfilePhotoWrapper>
        <img src={photo} alt="" />
        <Figcaption>
          Profielfoto
          <Button
            size="small"
            className={classes.buttonLink}
            // onClick={this.profilePhotoChange}
          >
            <Dropzone
              onDrop={(acceptedFiles) => set_profile_photo(acceptedFiles[0])}
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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} style={{ marginTop: "50px" }}>
          <Grid sm={5} xs={12} item={true}>
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={7} xs={0} item={true} />
          <Grid xs={12} sm={2} className={classes.padding1} item={true}>
            <Typography className={classes.label} variant="button">
              Aanhef
            </Typography>
            <FormField>
              <FormControl variant="outlined" className="formControl">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Gekozen Item
                </InputLabel>
                <Select
                  native
                  value={salutation}
                  className={"formControl selectView "}
                  placeholder="Dhr."
                  onChange={(e) => setSalutation(e.target.value)}
                  label="Gekozen Item"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option className="option" value="Dhr.">
                    Dhr.
                  </option>
                  <option className="option" value="Mvr.">
                    Mvr.
                  </option>
                </Select>
              </FormControl>
            </FormField>
          </Grid>
          <Grid sm={3} xs={12} item={true}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Grid>

          <Grid sm={5} xs={12} className={classes.margin2Left} item={true}>
            <Typography className={classes.label} variant="button">
              KVK nummer
            </Typography>
            <TextField
              id="outlined-full-width"
              placeholder="www.Superkeukens.nl"
              fullWidth
              margin="normal"
              variant="outlined"
              className={classes.paper}
              InputLabelProps={{
                shrink: true,
              }}
              value={kvkNumver}
              onChange={(e) => setKvkNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={4} xs={12} className={classes.padding1} item={true}>
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
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={1} xs={12} item={true}>
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
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={5} xs={12} className={classes.margin2Left} item={true}>
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
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={2} xs={12} className={classes.padding1} item={true}>
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
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              required
            />
          </Grid>

          <Grid sm={3} xs={12} item={true}>
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
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Grid>

          <Grid sm={4} xs={12} className={classes.margin1Left} item={true}>
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
              onChange={(e) => setLand(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Divider
          className={classes.divider}
          variant="fullWidth"
          component="hr"
        />
        <div
          className="text-center text-success"
          dangerouslySetInnerHTML={{
            __html: passwordResult,
          }}
        />
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid sm={5} xs={12} item={true}>
            <Typography className={classes.label} variant="button">
              E-mail
            </Typography>
            <TextField
              id="outlined-full-width"
              placeholder="info@ideastudio.nl"
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
              className={classes.paper}
              InputLabelProps={{
                shrink: true,
              }}
              value={email}
              // disabled={true}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={7} xs={0} item={true} />

          <Grid sm={5} xs={12} item={true}>
            <Typography className={classes.label} variant="button">
              Huidige wachtwoord
            </Typography>
            <TextField
              type="password"
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
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid sm={5} xs={12} className={classes.marginLeftNormal} item={true}>
            <Typography className={classes.label} variant="button">
              Nieuwe wachtwoord
            </Typography>
            <TextField
              type="password"
              id="outlined-full-width"
              placeholder=""
              fullWidth
              margin="normal"
              variant="outlined"
              className={classes.paper}
              InputLabelProps={{
                shrink: true,
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Grid className={classes.link}>
          <Link style={{ color: "#ff6600" }} to="/reset-password">
            Wachtwoord vergeten?
          </Link>
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
            className={classes.button + " " + cssButtons.saveButton}
            endIcon={<ArrowForwardIcon />}
            type="submit"
          >
            OPSLAAN
          </Button>
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default withStyles(styles)(CompanyRegister);
