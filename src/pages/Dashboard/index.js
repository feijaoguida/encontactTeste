import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import { AppBar, Toolbar } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Menu, MenuItem } from "@material-ui/core";
import { Collapse } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import { Avatar } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

// For Switch Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import StarBorder from "@material-ui/icons/StarBorder";
import SendIcon from "@material-ui/icons/Send";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SearchIcon from "@material-ui/icons/Search";

import { FaFilter } from "react-icons/fa";

import { orange, lightBlue, deepOrange, blue } from "@material-ui/core/colors";

import { useTranslation } from "react-i18next";
import { getUser, logout } from "../../services/auth";
import { useStyles } from "./styleUI";
import api from "../../services/api";
import * as s from "./styles";
import Copyright from "../../components/Copyright";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const StyledList = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.secondary.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(ListItem);

const userLogged = getUser();

export default function Dashboard() {
  const [checked, setChecked] = useState({
    idCheck: [],
  });
  const [menus, setMenu] = useState([]);
  const [contents, setContent] = useState([]);
  const [colapseOpen, setColapseOpen] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [darkState, setDarkState] = useState(false);

  const [t, i18n] = useTranslation("common");
  const history = useHistory();

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : blue[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickColapse = () => {
    setColapseOpen(!colapseOpen);
  };

  // Carrega menu ao carregar a pagina
  useEffect(() => {
    async function loadMenus() {
      const response = await api.get("menus");
      setMenu(response.data);
    }
    loadMenus();
  }, []);

  //load itens do menu e carraga o estado Contents
  async function handleClickMenu(idMenu) {
    const response = await api.get(`items/${idMenu}`);
    setContent(response.data.subMenuItems);

    //Limpa o state checked
    setChecked({
      idCheck: [],
    });
  }

  async function handleClickExit() {
    logout();
    history.push("/login");
  }

  //Verifica se algum item da lista esta checado
  function handleToggle(value) {
    const { idCheck } = checked;
    const currentIndex = idCheck.indexOf(value);
    const newChecked = [...idCheck];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked({
      idCheck: newChecked,
    });
  }

  const [hoverAvatar, setHoverAvatar] = useState(false);
  const handleHoverAvatarTrue = () => () => {
    setHoverAvatar(true);
  };

  const handleHoverAvatarFalse = () => () => {
    setHoverAvatar(false);
  };

  function handleArchive(content) {
    const { idCheck } = checked;

    setContent(
      contents.filter((item) => {
        return !idCheck.includes(item.id);
      })
    );

    setChecked({
      idCheck: [],
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
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
              {t("dashboard.title", { user: userLogged })}
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
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !openDrawer && classes.drawerPaperClose
            ),
          }}
          open={openDrawer}
        >
          <div className={classes.drawerGroupHeader}>
            <div className={classes.drawerHeader}>
              <Avatar
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color={mainSecondaryColor}
              >
                OW
              </Avatar>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={() => handleClickExit()}>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={t("dashboard.buttonExit")} />
                </StyledMenuItem>
              </StyledMenu>
            </div>
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </div>
          <Divider />
          <List>
            {menus.map((menu) => (
              <React.Fragment key={menu.id}>
                <ListItem button onClick={handleClickColapse}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
                <Collapse in timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.subMenus.map((submenu) => (
                      <StyledList
                        onClick={() => handleClickMenu(submenu.id)}
                        key={submenu.id}
                        button
                        dense
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary={submenu.name} />
                      </StyledList>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            <s.DivActions>
              <s.Actions>
                <Checkbox color="primary" />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  {t("dashboard.buttonAssign")}
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                  onClick={() => handleArchive(checked)}
                  disabled={checked.idCheck.length <= 0}
                >
                  {t("dashboard.buttonArchive")}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                >
                  {t("dashboard.buttonSchedule")}
                </Button>
              </s.Actions>
              <s.Filter>
                {" "}
                <FaFilter size={18} color="#66615b" />{" "}
              </s.Filter>
            </s.DivActions>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Card className={classes.card}>
              <List>
                {contents.length <= 0 ? (
                  <>
                    <Typography variant="h5">
                      {t("dashboard.messageNotInfo")}
                    </Typography>
                  </>
                ) : (
                  <>
                    {contents.map((content) => (
                      <ListItem
                        alignItems="center"
                        onClick={() => handleToggle(content.id)}
                        button
                        key={content.id}
                        onMouseEnter={handleHoverAvatarTrue()}
                        onMouseLeave={handleHoverAvatarFalse()}
                      >
                        <Avatar
                          color="primary"
                          className={
                            hoverAvatar || checked.idCheck.length > 0
                              ? classes.avatarInvisible
                              : classes.avatarVisible
                          }
                        >
                          {content.owner}
                        </Avatar>

                        <Checkbox
                          checked={checked.idCheck.indexOf(content.id) !== -1}
                          color="primary"
                          tabIndex={-1}
                          disableRipple
                          className={
                            hoverAvatar || checked.idCheck.length > 0
                              ? classes.checkVisible
                              : classes.checkInvisible
                          }
                        />
                        <ListItemText
                          primary={content.name}
                          secondary={
                            <>
                              <Typography component="span" color="textPrimary">
                                {content.subject}
                              </Typography>
                              <br />
                              {t("dashboard.newMessage")}
                            </>
                          }
                        />
                        <ListItemSecondaryAction className={classes.listItem}>
                          <Typography
                            className={classes.inline}
                            component="span"
                            color="textPrimary"
                          >
                            {t("dashboard.today")}, 11:42
                          </Typography>

                          <Typography
                            className={classes.inline}
                            component="span"
                            color="textPrimary"
                          >
                            -2 {t("dashboard.hours")}
                          </Typography>
                          <AvatarGroup max={3}>
                            {content.users.map((user) => (
                              <Avatar key={user}>{user}</Avatar>
                            ))}
                          </AvatarGroup>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Card>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
