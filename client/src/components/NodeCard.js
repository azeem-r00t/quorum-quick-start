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
      sharedSecret: '', 
    };
  }

  convertToUrl(node) {
    var url = node; 
    if (!/^(?:f|ht)tps?:\/\//.test(node)) {
      url = "http://" + node;
    }
    console.log(url);
    return url;
  }

  componentDidMount() {
    /*
    Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
    this.web3 = new Web3("http://127.0.0.1:22001");
    console.log(this.web3.currentProvider); 
    this.loadLatestSharedSecret();
    */
    this.timerID = setInterval(
      () => this.loadLatestSharedSecret(), 
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); 
  }

  loadLatestSharedSecret() {
    /*
    let storage = contract(SimpleStorageContract);
    storage.setProvider(this.web3.currentProvider);
    this.web3.eth.getAccounts((error, accounts) => {
      storage.deployed().then((instance) => {
        console.log(instance.address);
        return instance.get({from:accounts[0]});
      }).then((secret) => {
        console.log(secret.c[0]);
        return (this.setState( { sharedSecret: secret.c[0] }));
      })
    });
    */
    this.setState( { sharedSecret: 42 } );
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
