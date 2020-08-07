import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Info from "@material-ui/icons/Info";
import Warning from "@material-ui/icons/Warning";
import Check from "@material-ui/icons/CheckCircle";
import Error from "@material-ui/icons/RemoveCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Ionicon from "react-ionicons";
import dummy from "dan-api/dummy/dummyContents";
import messageStyles from "dan-styles/Messages.scss";
import avatarApi from "dan-api/images/avatars";
import link from "dan-api/ui/link";
import styles from "./header-jss";

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    openMenu: null,
    user: {}
  };

  // eslint-disable-next-line react/sort-comp
  handleMenu = menu => event => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, openMenu: null });
  };

  handleLogout = () => {
    window.localStorage.clear();
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user });
  }


  render() {
    const { classes, dark } = this.props;
    const { anchorEl, openMenu } = this.state;
    const { user } = this.state;
    let linkProfiler = '/login';
    if (user) {

      if (user.type === 'admin') {
        linkProfiler = '/admin/profiler'
      } else if (user.type === 'company') {
        linkProfiler = '/companies/profiles';
      } else {
        linkProfiler = '/users/profiles';
      }
    }


    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu("notification")}
          color="inherit"
          className={classNames(
            classes.notifIcon,
            dark ? classes.dark : classes.light
          )}
        >
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <Ionicon icon="ios-notifications-outline" />
          </Badge>
        </IconButton>
        {/* <Menu
          id="menu-notification"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          className={classes.notifMenu}
          PaperProps={{
            style: {
              width: 350
            }
          }}
          open={openMenu === "notification"}
          onClose={this.handleClose}
        > */}
          {/* <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <ListItemAvatar>
                <Avatar alt="User Name" src={avatarApi[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.sentences}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageSuccess}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageWarning}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Warning />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageError}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Error />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. "
                className={classes.textNotif}
                secondary="Jan 9, 2016"
              />
            </div>
          </MenuItem> */}
        {/* </Menu> */}
        <Button onClick={this.handleMenu("user-setting")}>
          <Avatar alt={dummy.user.name} src={dummy.user.avatar} />
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={openMenu === "user-setting"}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to={linkProfiler}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to={"/users/messages"}
          >
            Inbox
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleLogout} component={Link} to="/login">
            Uitloggen
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool
};

UserMenu.defaultProps = {
  dark: false
};

export default withStyles(styles)(UserMenu);
