import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import brand from "dan-api/dummy/brand";
import dummy from "dan-api/dummy/dummyContents";
// import logo from "dan-images/logo.svg";
import MainMenu from "./MainMenu";
import styles from "./sidebar-jss";
import logo from "dan-images/companyLogo.png";
import { adminDashBoardCounts } from "../../data/data";

const SidebarContent = (props) => {
  const [transform, setTransform] = useState(0);
  const [notifyData, setNotifyData] = useState([]);

  // componentDidMount = () => {
  //   // Scroll content to top
  //   const mainContent = document.getElementById("sidebar");
  //   mainContent.addEventListener("scroll", handleScroll);
  // };

  useEffect(() => {
    let type = JSON.parse(localStorage.getItem("user")).type;
    if (type === "admin") {
      adminDashBoardCounts().then((res) => {
        if (res.data.isError || res.data.shouldLogin) {
          console.error("errors");
        }
        if (res.data.error) {
          console.error("error");
        }
        console.log("I am here", res.data);
        let notify_data = [];
        notify_data["offers"] = res.data.notification.new_offer;
        notify_data["klanten"] = res.data.notification.new_user;
        notify_data["bedrijven"] = res.data.notification.new_companies;
        setNotifyData(notify_data);
      });
    }
  }, []);

  useEffect(() => {
    const mainContent = document.getElementById("sidebar");
    mainContent.addEventListener("scroll", handleScroll);
  }, [transform]);

  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  const toMainPage = () => {
    let type = JSON.parse(localStorage.getItem("user")).type;
    if (type === "admin") return "/admin";
    else if (type === "client") return "/users";
    else if (type === "company") return "/companies";
  };

  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    isLogin,
  } = props;

  const setStatus = (st) => {
    switch (st) {
      case "online":
        return classes.online;
      case "idle":
        return classes.idle;
      case "bussy":
        return classes.bussy;
      default:
        return classes.offline;
    }
  };
  return (
    <div
      className={classNames(
        classes.drawerInner,
        !drawerPaper ? classes.drawerPaperClose : ""
      )}
    >
      <div className={classes.drawerHeader}>
        <NavLink
          to={toMainPage}
          className={classNames(
            classes.brand,
            classes.brandBar,
            turnDarker && classes.darker
          )}
        >
          <h3 style={{ color: "#0090e3", fontSize: "17px" }}>
            <img src={logo} alt={brand.name} className={classes.companyLogo} />
            {/* Keukenvergelijking.nl */}
          </h3>
        </NavLink>
      </div>
      <div
        id="sidebar"
        className={classNames(
          classes.menuContainer,
          leftSidebar && classes.rounded,
          isLogin && classes.withProfile
        )}
      >
        <MainMenu
          loadTransition={loadTransition}
          dataMenu={dataMenu}
          toggleDrawerOpen={toggleDrawerOpen}
          notify_data={notifyData}
        />
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

export default withStyles(styles)(SidebarContent);
