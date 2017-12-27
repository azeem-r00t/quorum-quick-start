import React, { Component } from 'react';

function withConfig(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props); 
            this.state = { 
                config: null
            }
        }

        componentWillMount() {
            var config = {}; 
            config.SMART_CONTRACT_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_ADDRESS; 
            config.SMART_CONTRACT_PARTIES = process.env.REACT_APP_SMART_CONTRACT_PARTIES.split(','); 
            config.DEFAULT_WEB3_PROVIDER = process.env.REACT_APP_WEB3_PROVIDER; 
            config.QUORUM_NODES= process.env.REACT_APP_QUORUM_NODES.split(',');    
            this.setState( { config } );
        }

        render() {
            return <WrappedComponent config={this.state.config} {...this.props} />;
        }
    }
}

export default withConfig; 