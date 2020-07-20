import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CreateIcon from "@material-ui/icons/Create";
//
//
import dummy from "dan-api/dummy/dummyContents";
// form fields..
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select, TextField, Grid, Typography, Divider } from "@material-ui/core";
import { Figcaption, FormField, ProfilNavBar, ProfilePhotoWrapper, ButtonsContainer } from "./style";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

export default class FirstComponent extends Component {


    render() {
        const { classes } = this.props;
        const {
            value,
            file, salutation,
            first_name, company_name,
            telephone_number, street,
            house_number, postcode, city,
            land, email, photo, oldPassword,
            newPassword, kvk_number
        } = this.props.state;
        let base64Img = dummy.user.avatar;

        if (file) {
            base64Img = URL.createObjectURL(file);
        }
        return (
            <>
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
                                onDrop={acceptedFiles => this.props.handleState({ file: acceptedFiles[0] })}
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
                    <Grid sm={5} xs={12}>
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
                                this.props.handleState({ company_name });
                            }}
                        />
                    </Grid>
                    <Grid sm={7} xs={0} />
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
                                        this.props.handleState({ salutation });
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
                                this.props.handleState({ first_name });
                            }}
                        />
                    </Grid>

                    <Grid sm={5} xs={12} className={classes.margin2Left}>
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
                            value={kvk_number}
                            onChange={(e) => {
                                let kvk_number = e.target.value;
                                this.props.handleState({ kvk_number });
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
                                this.props.handleState({ street });
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
                                this.props.handleState({ house_number });
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
                                this.props.handleState({ telephone_number });
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
                                this.props.handleState({ postcode });
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
                                this.props.handleState({ city });
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
                                this.props.handleState({ land });
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
                                this.props.handleState({ email });
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
                                this.props.handleState({ oldPassword });
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
                                this.props.handleState({ newPassword });
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid className={classes.link} >
                    <Link style={{ color: '#ff6600' }} to="/reset-password" >Wachtwoord vergeten?</Link>
                </Grid>
            </>
        )
    }
}
