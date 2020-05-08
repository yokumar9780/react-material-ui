import React from "react";

import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

function NavigatorList(props) {
  const [state, setState] = React.useState({ open: {} });

  const handleClick = (key) => () => {
    console.log(key);
    setState({ [key]: !state[key] });
  };
  const { lists, classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {lists.map(({ key, label, icon: Icon, items }) => {
          const open = state[key] || false;
          return (
            <div key={key}>
              <ListItem button onClick={handleClick(key)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText inset primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {items.map(
                    ({ key: childKey, label: childLabel, icon: ChildIcon }) => (
                      <ListItem
                        key={childKey}
                        button
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <ChildIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={childLabel} />
                      </ListItem>
                    )
                  )}
                </List>
              </Collapse>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default withStyles(styles)(NavigatorList);
