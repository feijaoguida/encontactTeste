import { deepPurple, deepOrange } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerGroupHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  search: {
    marginButton: "10px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  card: {
    padding: theme.spacing(2),
  },
  contentRow: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    background: "red",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginRight: 10,
  },
  row: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    overflow: "hide",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
  container: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: theme.palette.primary,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: theme.palette.primary,
  },

  checkVisible: {
    display: "flex",
  },
  checkInvisible: {
    display: "none",
  },
  avatarVisible: {
    display: "flex",
    marginRight: "4px",
    backgroundColor: theme.palette.primary,
  },
  avatarInvisible: {
    display: "none",
  },
}));
