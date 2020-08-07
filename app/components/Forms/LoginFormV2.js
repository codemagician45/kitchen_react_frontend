import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form/immutable";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import gIcon from "../../../public/images/icon/g_search.svg";
import facebook from "../../../public/images/icon/facebook.svg";
import styles from "./user-jss";
import { TextFieldRedux, CheckboxRedux } from "./ReduxFormMUI";
import { ContentDivider } from "../Divider";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import { googleLogin } from "../../data/data";
import color from "@material-ui/core/colors/amber";

// style
const LoginIcon = styled.img`
  width: 33.7px;
  height: 33.7px;
  margin-left: 16px;
  object-fit: contain;
`;

// validation functions
const required = (value) => (value == null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

// eslint-disable-next-line prefer-arrow-callback
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

// eslint-disable-next-line
const LoginFormV2 = (props) => {
  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
    deco,
    loginError,
    loginErrorMessage,
    loginByGoogle,
    loginByFacebook,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const responseGoogle = (response) => {
    console.log(response);
    loginByGoogle(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
    loginByFacebook(response);
  };

  return (
    <Paper className={classNames(classes.sideWrap, deco && classes.petal)}>
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Meld je aan
        </Typography>
        <Button
          size="small"
          className={classes.buttonLink}
          component={LinkBtn}
          to="/register"
        >
          <Icon className={classes.icon}>arrow_forward</Icon>
          Create new account
        </Button>
      </div>
      <section className={classes.socmedSideLogin}>
        <div className={classes.btnArea}>
          <FacebookLogin
            appId="617787612458000"
            // autoLoad={true}
            isMobile={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="btnFacebook"
            icon="fa-facebook"
            textButton="&nbsp;&nbsp;INLOGGEN MET FACEBOOK"
          />
          <GoogleLogin
            clientId="300747581681-p58b4tked146c633es2md8ubfuf1r1un.apps.googleusercontent.com"
            buttonText="INLOGGEN MET GMAIL"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className={classes.google_login_button}
          />
        </div>
        <ContentDivider content="of met een e-mail" />
      </section>
      {loginError && <div className={classes.login_alert}>{loginErrorMessage}</div>}
      <section className={classes.pageFormSideWrap}>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder="E-mail adres"
                label="E-mail adres"
                // required
                validate={[required, email]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="password"
                component={TextFieldRedux}
                type={showPassword ? "text" : "password"}
                label="Wachtwoord"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
                validate={required}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div className={classes.optArea}>
            <FormControlLabel
              className={classes.label}
              control={<Field name="checkbox" component={CheckboxRedux} />}
              label="Opslaan"
            />
            <Button
              size="small"
              component={LinkBtn}
              to="/reset-password"
              className={classes.buttonLink}
            >
              Wachtwoord vergeten
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button
              id="continue"
              variant="contained"
              fullWidth
              size="large"
              type="submit"
            >
              Aanmelden
              <ArrowForward
                className={classNames(classes.rightIcon, classes.iconSmall)}
                disabled={submitting || pristine}
              />
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
};

LoginFormV2.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  loginError: PropTypes.any.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: "immutableExample",
  enableReinitialize: true,
})(LoginFormV2);

const reducerLogin = "login";
const reducerUi = "ui";
const FormInit = connect((state) => ({
  force: state,
  initialValues: state.getIn([reducerLogin, "usersLogin"]),
  deco: state.getIn([reducerUi, "decoration"]),
}))(LoginFormReduxed);

export default withStyles(styles)(FormInit);
