import React, { useState } from "react";
import {
  fade,
  makeStyles,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Link,
} from "@material-ui/core";
import {
  Search as SearchIcon,
  AccountCircle,
  Notifications as NotificationsIcon,
  More as MoreIcon,
  Add as AddIcon,
  ArrowBack,
} from "@material-ui/icons";

import { useLocation, useHistory } from "react-router-dom";

// firebase
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "10px",
    border: "1px solid #D7DEF7",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      transition: ".3s ease all",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "40%",
    },
  },
  smallsearch: {
    position: "relative",
    borderRadius: "10px",
    border: "1px solid #D7DEF7",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      transition: ".3s ease all",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "20%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: fade("#000", 0.58),
  },
  inputRoot: {
    color: fade("#000", 0.58),
  },
  button: {
    backgroundColor: "white",
    border: "1px solid #1C9295",
    color: "#1C9295",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #1C9295",
      backgroundColor: "#1C9295",
      color: "white",
    },
  },
  backbutton: {
    backgroundColor: "transparent",
    border: "1px solid #aaa",
    color: "#aaa",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      textDecoration: "none",
      transition: ".1s ease all",
      boxShadow: "none",
    },
  },
  iconColor: {
    color: "#333",
    "&:hover": {
      color: "#42B4B7",
      transition: ".1s ease color",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function HeaderBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log("Can't log out");
      });
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          className={classes.iconColor}
        >
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          className={classes.iconColor}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return props.page === "dashboard" ? (
    <>
      <AppBar className="headerWithNav" position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className="grow" />

          <div className={classes.sectionDesktop}>
            <AddEmployeeButton
              classes={classes}
              noAddEmployee={props.noAddEmployee}
            />

            <IconButton
              aria-label="show new notifications"
              color="inherit"
              className={classes.iconColor}
            >
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconColor}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  ) : props.back === true ? (
    <>
      <AppBar className="headerWithoutNav" position="static">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <Button
              className={classes.backbutton}
              variant="contained"
              color="primary"
              startIcon={<ArrowBack />}
              component={Link}
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </div>

          <div className="grow" />

          <div className={classes.smallsearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              className={classes.iconColor}
            >
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconColor}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  ) : props.page === "employee" ? (
    <>
      <AppBar className="headerWithNav" position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className="grow" />

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              className={classes.iconColor}
            >
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconColor}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  ) : (
    <>
      <AppBar className="headerWithoutNav" position="static">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <Button
              className={classes.backbutton}
              variant="contained"
              color="primary"
              startIcon={<ArrowBack />}
              component={Link}
              href="/"
            >
              Back to Dashboard
            </Button>
          </div>

          <div className="grow" />

          <div className={classes.smallsearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              className={classes.iconColor}
            >
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.iconColor}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

function AddEmployeeButton(props) {
  console.log("noaddemployee: " + props.noAddEmployee);
  if (props.noAddEmployee) {
    return <></>;
  }
  return (
    <Button
      className={props.classes.button}
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      component={Link}
      href="/addemployee"
    >
      New Employee
    </Button>
  );
}
