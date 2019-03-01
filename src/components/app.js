import React, { Component } from 'react';

import Room from "./room"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      room: "start"
    }

    this.handleRoomChange = this.handleRoomChange.bind(this)
  }

  handleRoomChange(newRoom) {
    this.setState({
      room: newRoom
    })
  }

  render() {
    return (
      <div>
        <Room room={this.state.room} handler={this.handleRoomChange} />
      </div>
    )
  }
}
