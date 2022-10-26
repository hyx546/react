import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// @ts-ignore
// @withRouter
class GrandSonDemo extends Component {
    componentDidMount() {
        console.log('grandSon', this.props);
    }
    render() {
        return (
            <div>GrandSonDemo</div>
        );
    }
}

export default GrandSonDemo;