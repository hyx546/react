import React, { Component } from 'react'

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  add = () => {
    console.log('add前', this.state.num);
    this.setState({
      num: this.state.num + 1
    },() => {
      console.log('回调-------add后', this.state.num);
    });
    console.log('add后', this.state.num);
  }

  add3 = () => {
    console.log('add3前', this.state.num);
    this.setState({
      num: this.state.num + 1
    });
    this.setState({
      num: this.state.num + 1
    });
    this.setState({
      num: this.state.num + 1
    });
    console.log('add3后', this.state.num);
  }

  reduce = () => {
    setTimeout(() => {
      console.log('reduce前', this.state.num);
      this.setState({
        num:this.state.num -1
      })
      console.log('reduce后',this.state.num);
    },0)
  }

  render() {
    console.log('-------',this.state.num);
    return (
      <div>
        <button onClick={this.add}>点击+1</button>
        <button onClick={this.add3}>点击+3</button>
        <button onClick={this.reduce}>点击-1</button>
      </div>
    )
  }
}

export default index
