import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import withConfig from './withConfig';
import Button from 'material-ui/Button/Button';
import Save from 'material-ui-icons/Save';
import Paper from 'material-ui/Paper/Paper';
import Typography from 'material-ui/Typography/Typography';
import grey from 'material-ui/colors/grey';
import Divider from 'material-ui/Divider/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 25,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  },
  button: {
      
  },
  rightIcon: {
    margin: theme.spacing.unit,
    width: 15, 
    height: 15,
  },
  console: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: grey[300],
    maxHeight: 500,
    height: 500,
    overflow: 'auto',
  },
  log: {
    fontSize: 8, 
    paddingTop: 10, 
    margin: 10,
    fontStyle: 'italic',      
  }
});

class TransactionForm extends React.Component {
  state = {
      sharedSecret: '42',
      transactionOutput: 'a',
  };

  handleChange = sharedSecret => event => {
    this.setState({
      [sharedSecret]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
        <Paper className={classes.console} elevation={4} >
            <Typography type="title" component="h4">
                Console
            </Typography>
            <Divider/>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="sharedSecret"
                label="Shared Secret"
                className={classes.textField}
                value={this.state.sharedSecret}
                onChange={this.handleChange('sharedSecret')}
                />
                <Button className={classes.button} raised color="primary">
                Save
                <Save className={classes.rightIcon} />
                </Button>    
            </form>    
            <Typography component="p" className={classes.log}>
            {this.state.transactionOutput}
            </Typography>
        </Paper>
        </div>
    );
  }
}

TransactionForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withConfig(withStyles(styles)(TransactionForm));