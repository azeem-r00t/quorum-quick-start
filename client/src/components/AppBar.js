import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TrackChanges from 'material-ui-icons/TrackChanges';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  icon: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <TrackChanges color="contrast" className={classes.icon} />
                <Typography type="title" color="inherit" className={classes.flex}>
                    Quorum Quickstart
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

