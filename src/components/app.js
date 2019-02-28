import React, { Component } from 'react';

import Start from "./rooms/start"
import End from "./rooms/end"
import InitialRoom from "./rooms/initial-room"
import Cabin from "./rooms/cabin"
import Outside from "./rooms/outside"
import Garden from "./rooms/garden"
import Woods from "./rooms/woods"
import Fire from "./rooms/fire"
import Upstairs from "./rooms/upstairs"
import Sleep from "./rooms/sleep"

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
    switch (this.state.room) {
      case "start": {
        return (
          <div className='app'>
            <Start handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "initial-room": {
        return (
          <div className='app'>
            <InitialRoom handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "cabin": {
        return (
          <div className='app'>
            <Cabin handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "outside": {
        return (
          <div className='app'>
            <Outside handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "garden": {
        return (
          <div className='app'>
            <Garden handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "woods": {
        return (
          <div className='app'>
            <Woods handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "fire": {
        return (
          <div className='app'>
            <Fire handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "upstairs": {
        return (
          <div className='app'>
            <Upstairs handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "sleep": {
        return (
          <div className='app'>
            <Sleep handler={this.handleRoomChange}/>
          </div>
        )
      }
      case "end": {
        return (
          <div className='app'>
            <End handler={this.handleRoomChange}/>
          </div>
        )
      }
      default: {
        return (
          <div>
            How did we get here?
          </div>
        )
      }
    }
  }
}
