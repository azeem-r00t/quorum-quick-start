import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {  CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import withConfig from './withConfig';

const styles = theme => ({
  card: {
    minWidth: 125,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  headline: {
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class NodeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedSecret: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.loadLatestSharedSecret(), 
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); 
  }

  async loadLatestSharedSecret() {
    try {
      let response = await fetch("/api/storage?host=" + this.props.host); 
      let data = await response.json(); 
      this.setState( { sharedSecret: data.secret } );   
    } catch (e) {
      console.log(e); 
      this.setState( { sharedSecret: '#E' });
    }
  }
  
  render() {
    const { classes, host } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>{host}</Typography>
            <Typography type="headline" component="h2" className={classes.headline}>
              {this.state.sharedSecret}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );  
  }
}

NodeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withConfig(withStyles(styles)(NodeCard));
