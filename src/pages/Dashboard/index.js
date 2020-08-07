import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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

import { FaFilter } from "react-icons/fa";

import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";

import { useTranslation } from "react-i18next";
import { getUser } from "../../services/auth";
import { useStyles } from "./styleUI";
import api from "../../services/api";
import * as s from "./styles";

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
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.dark,
    "&:focus": {
      backgroundColor: theme.palette.secondary.dark,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(ListItem);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Uddeshya Singh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Dashboard() {
  const [menus, setMenu] = useState([]);
  const [contents, setContent] = useState([]);
  const [colapseOpen, setColapseOpen] = useState(true);

  const userLogged = getUser();
  const [t, i18n] = useTranslation("common");

  const [openDrawer, setOpenDrawer] = useState(true);
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
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

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Carrega do menu ao carregar a pagina
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
                variant="contained"
                onClick={handleClick}
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
                <StyledMenuItem>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
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
              <>
                <ListItem button key={menu.id} onClick={handleClickColapse}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                  {colapseOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={colapseOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.subMenus.map((submenu) => (
                      <StyledList
                        onClick={() => handleClickMenu(submenu.id)}
                        key={submenu.id}
                        button
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={submenu.name} />
                      </StyledList>
                    ))}
                  </List>
                </Collapse>
              </>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg">
            <s.DivActions>
              <s.Actions>
                <input type="checkbox" name="" id="" />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Atribuir
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                >
                  Arquivar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                >
                  Agendar
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
              {contents.map((content) => (
                <>
                  <CardContent className={classes.contentRow} key={content.id}>
                    <div className={classes.row}>
                      <Avatar className={classes.orange}>OW</Avatar>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedA"
                              color="primary"
                              id="CheckA"
                            />
                          }
                        />
                      </FormGroup>
                      <label htmlFor="CheckA">
                        <Typography variant={"h6"}>{content.name}</Typography>
                        <Typography variant={"body1"}>
                          {content.subject}
                        </Typography>

                        <Typography variant={"subtitle2"}>
                          {content.name}
                        </Typography>
                      </label>
                    </div>
                    <AvatarGroup max={4}>
                      {content.users.map((user) => (
                        <Avatar className={classes.orange} key={user}>
                          {user}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                  </CardContent>

                  <Divider variant={"middle"} className={classes.divider} />
                </>
              ))}
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
