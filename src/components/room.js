import React from 'react'

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
import Party from "./rooms/party"

export default function(props) {
    const { room, keyFound } = props.state
    switch (room) {
        case "start": {
          return (
            <div className="room">
              <Start handler={props.handler}/>
            </div>
          )
        }
        case "initial-room": {
          return (
            <div className="room">
              <InitialRoom handler={props.handler}/>
            </div>
          )
        }
        case "cabin": {
          return (
            <div className="room">
              <Cabin handler={props.handler}/>
            </div>
          )
        }
        case "outside": {
          return (
            <div className="room">
              <Outside handler={props.handler}/>
            </div>
          )
        }
        case "garden": {
          return (
            <div className="room">
              <Garden keyFound={keyFound} handler={props.handler}/>
            </div>
          )
        }
        case "woods": {
          return (
            <div className="room">
              <Woods handler={props.handler}/>
            </div>
          )
        }
        case "fire": {
          return (
            <div className="room">
              <Fire handler={props.handler}/>
            </div>
          )
        }
        case "upstairs": {
          return (
            <div className="room">
              <Upstairs keyFound={keyFound} handler={props.handler}/>
            </div>
          )
        }
        case "sleep": {
          return (
            <div className="room">
              <Sleep handler={props.handler}/>
            </div>
          )
        }
        case "party": {
          return (
            <div className="room">
              <Party handler={props.handler}/>
            </div>
          )
        }
        case "end": {
          return (
            <div className="room">
              <End handler={props.handler}/>
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