import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import NavigatorList from "./NavigatorList";
import Avatar from "@material-ui/core/Avatar";
import { fleets } from "./NavigatorData";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    //marginRight: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  boxLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(1),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, childId) => {
    setSelectedIndex(childId);
    alert(childId);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          Atlas
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <Avatar className={classes.boxLarge}>2 Total Fleets</Avatar>

          <Avatar className={classes.boxLarge}> 10 Total Vehicles</Avatar>
        </ListItem>
        <NavigatorList lists={fleets} />
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
