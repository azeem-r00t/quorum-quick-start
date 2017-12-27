import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import withConfig from './withConfig';
import NodeCard from './NodeCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    align: 'center'
  },
  item: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function NodesGrid(props) {
  const { classes, config } = props;
  const gridItems = config.QUORUM_NODES.map((node) => 
    <Grid item xs={10} sm={2} key={node} >
      <NodeCard className={classes.item} host={node} />
    </Grid>
  );
  return (
    <div className={classes.root}>
      <Grid container align="center" justify="center" spacing={16}>
        {gridItems}
      </Grid>
    </div>
  );
}

NodesGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withConfig(withStyles(styles)(NodesGrid));