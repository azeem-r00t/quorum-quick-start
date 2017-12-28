import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withConfig from './withConfig';
import Chip from 'material-ui/Chip/Chip';
import FaceIcon from 'material-ui-icons/Face';
import VerifiedUserIcon from 'material-ui-icons/VerifiedUser';
import { Avatar } from 'material-ui';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  chip: {
      margin: theme.spacing.unit,
  },
  svgIcon: {
      color: grey[800],
  },
  row: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
  },
/*
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
*/
root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

function Contract(props) {
  const { classes, config } = props;
  const contractPartyChips = config.SMART_CONTRACT_PARTIES.map((key) => 
    <Chip label={key} key={key}
      avatar={<Avatar><FaceIcon  className={classes.svgIcon}/></Avatar>}
      className={classes.chip}/>
  );

  return (
    <div className={classes.row}>
    {/* TODO enable after the api server has /api/contracts available
        <Chip label={config.SMART_CONTRACT_ADDRESS}
            avatar={<Avatar><VerifiedUserIcon className={classes.svgIcon}/></Avatar>}
            className={classes.chip}/> 
        {contractPartyChips}
    */}
    </div>
  );
}

Contract.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withConfig(withStyles(styles)(Contract));
