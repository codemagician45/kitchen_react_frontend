/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import { LoginFormV2 } from "dan-components";
import styles from "dan-components/Forms/user-jss";

import { connect } from "react-redux";
import { authLogin } from "../../../actions/auth";
import { login } from "../../../data/data";
import logo from "dan-images/companyLogo.png";

import { googleLogin, facebookLogin } from "../../../data/data";

class LoginV2 extends React.Component {
  state = {
    error: false,
    errorMessage: "",
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.redirect(user.type);
    }
  }

  redirect(type) {
    if (type === "admin") {
      this.props.history.push("/admin");
    } else if (type === "company") {
      this.props.history.push("/companies");
    } else if (type === "client") {
      this.props.history.push("/users");
    }
  }

  submitForm(value) {
    this.setState({ error: true });
    this.setState({errorMessage: "One Second..."})
    setTimeout(() => {
      const { values } = this.props.form.toJS();
      login(values)
        .then((res) => {
          if (!res.data.login) {
            this.setState({ error: true });
            this.setState({errorMessage: res.data.error})
          } else {
            console.log(res)
            this.setState({ error: false });
            const { type } = res.data.user;
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
            this.redirect(type);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
  }

  loginByGoogle = (response) => {
    console.log(response);
    this.setState({ error: true });
    this.setState({errorMessage: "One Second..."})
    googleLogin(response.tokenId)
      .then((res) => {
        if (!res.data.login) {
          this.setState({ error: true });
          this.setState({errorMessage: res.data.error})
        } else {
          this.setState({ error: false });
          const { type } = res.data.user;
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          this.redirect(type);
        }
      })
      .catch((error) => {
        console.log(error.data.error);
        this.setState({ error: true });
      });
  };

  loginByFacebook = (response) => {
    console.log(response);
    this.setState({ error: true });
    this.setState({errorMessage: "One Second..."})
    facebookLogin(response.accessToken, response.userID)
      .then((res) => {
        if (!res.data.login) {
          this.setState({ error: true });
          this.setState({errorMessage: res.data.error})
        } else {
          this.setState({ error: false });
          const { type } = res.data.user;
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          this.redirect(type);
        }
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ error: true });
      });
  };
  render() {
    const title = brand.name + " - Login Version 2";
    const description = brand.desc;
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className={classes.opening}>
              <Typography variant="h4" className={classes.subpening}>
                {/* Keukenvergelijking.nl */}
                <img src={logo} alt={brand.name} className={classes.companyLogo1} />
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                className={classes.subpening}
                gutterBottom
              >
                Vergelijk en
                <br />
                ontvang de beste
                <br />
                offerte voor je keuken!
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className={classes.subpening}
              >
                U ontvangt binnen no-time een
                <br />
                voordelige offerte van een erkende
                <br />
                keukenaanbieder!
              </Typography>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <LoginFormV2
              onSubmit={(values) => this.submitForm(values)}
              loginError={error}
              loginErrorMessage={this.state.errorMessage}
              loginByGoogle={this.loginByGoogle}
              loginByFacebook={this.loginByFacebook}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: "12",
  error: "132",
  form: state.getIn(["form", "immutableExample"]),
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (username, password) => dispatch(authLogin(username, password)),
});

LoginV2.propTypes = {
  classes: PropTypes.object.isRequired,
  onAuth: PropTypes.func.isRequired,
  form: PropTypes.object,
  history: PropTypes.object.isRequired,
};

const LoginV2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginV2);

export default withStyles(styles)(LoginV2Mapped);
