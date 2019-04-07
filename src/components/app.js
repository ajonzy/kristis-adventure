import React, { Component } from 'react';

import Room from "./room"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      room: "start",
      roomCount: 0
    }

    this.handleRoomChange = this.handleRoomChange.bind(this)
  }

  handleRoomChange(newRoom) {
    this.setState({
      room: newRoom,
      roomCount: newRoom != "start" ? ++this.state.roomCount : 0
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