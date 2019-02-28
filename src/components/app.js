import React, { Component } from 'react';

import Start from "./rooms/start"
import End from "./rooms/end"

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
    if (this.state.room == "start") {
      return (
        <div className='app'>
          <Start handler={this.handleRoomChange}/>
        </div>
      )
    }
    else if (this.state.room == "end") {
      return (
        <div className='app'>
          <End handler={this.handleRoomChange}/>
        </div>
      )
    }
    else {
      return (
        <div>
          How did we get here?
        </div>
      )
    }
  }
}
