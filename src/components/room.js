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
    switch (props.room) {
        case "start": {
          return (
            <div className='app'>
              <Start handler={props.handler}/>
            </div>
          )
        }
        case "initial-room": {
          return (
            <div className='app'>
              <InitialRoom handler={props.handler}/>
            </div>
          )
        }
        case "cabin": {
          return (
            <div className='app'>
              <Cabin handler={props.handler}/>
            </div>
          )
        }
        case "outside": {
          return (
            <div className='app'>
              <Outside handler={props.handler}/>
            </div>
          )
        }
        case "garden": {
          return (
            <div className='app'>
              <Garden handler={props.handler}/>
            </div>
          )
        }
        case "woods": {
          return (
            <div className='app'>
              <Woods handler={props.handler}/>
            </div>
          )
        }
        case "fire": {
          return (
            <div className='app'>
              <Fire handler={props.handler}/>
            </div>
          )
        }
        case "upstairs": {
          return (
            <div className='app'>
              <Upstairs handler={props.handler}/>
            </div>
          )
        }
        case "sleep": {
          return (
            <div className='app'>
              <Sleep handler={props.handler}/>
            </div>
          )
        }
        case "party": {
          return (
            <div className='app'>
              <Party handler={props.handler}/>
            </div>
          )
        }
        case "end": {
          return (
            <div className='app'>
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