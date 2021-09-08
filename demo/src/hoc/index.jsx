import React, { Component } from 'react';
import withWindowSize from './withWindowSize';

export class MyComp extends Component {
  render() {
    const { windowSize } = this.props;
    console.log('----',windowSize);
    return <div></div>;
  }
}

export default withWindowSize(MyComp);
