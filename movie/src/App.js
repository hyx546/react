import React, { Component } from 'react';
import Nav from './components/nav';

export class App extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <div>{this.props.children}</div>
      </>
    )
  }
}

export default App
