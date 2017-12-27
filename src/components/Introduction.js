import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
});

function Introduction(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          Private smart contract demo
        </Typography>
        <Typography component="p">
          This is an example app to show shared state in a private smart contract on a quorum blockchain. The app can be configured to launch against any quorum network and utilizes the simple-storage contract (example provided with the quorum build) to demonstrate a shared secret between parties to the contract.
        </Typography>
      </Paper>
    </div>
  );
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Introduction);
