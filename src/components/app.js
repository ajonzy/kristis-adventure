import React, { Component } from 'react';

import Room from "./room"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      room: "start",
      keyFound: false
    }

    this.handleRoomChange = this.handleRoomChange.bind(this)
  }

  handleRoomChange(newRoom, key=this.state.keyFound) {
    this.setState({
      room: newRoom,
      keyFound: key
    })
  }

  render() {
    return (
      <div className="app">
        <h3>Kristi's<br/>Adventure</h3>
        <Room state={this.state} handler={this.handleRoomChange} />
      </div>
    )
  }
}