import React, { useState, useEffect } from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import Badge from "@material-ui/core/Badge";



import { useStyles } from "./styleUI";

// import { Container } from './styles';

export default function BarApp() {
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, openDrawer && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            openDrawer && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {t("dashboard.title", { usuario: userLogged })}
        </Typography>
        <Switch checked={darkState} onChange={handleThemeChange} />
        <Button onClick={() => i18n.changeLanguage("br")}>br </Button>
        <Button onClick={() => i18n.changeLanguage("en")}>en </Button>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
