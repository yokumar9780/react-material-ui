import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: "40px 16px",
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
