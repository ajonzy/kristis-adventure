import React from 'react'

import Start from "./rooms/start"
import End from "./rooms/end"
import Default from "./rooms/out-of-time"
import InitialRoom from "./rooms/initial-room"
import GoOutside from "./rooms/initial-room/go-outside"
import StayInside from "./rooms/initial-room/stay-inside"
import PlaySister from "./rooms/initial-room/play-sister"
import PlayIpod from "./rooms/initial-room/play-ipod"
import Scream from "./rooms/initial-room/stay-inside/scream"
import DecideShadow from "./rooms/initial-room/stay-inside/decide-shadow"
import ShrugBed from "./rooms/initial-room/stay-inside/shrug-bed"
import OutsidePlay from "./rooms/initial-room/stay-inside/outside-play"
import Break from "./rooms/initial-room/go-outside/break"
import Sneak from "./rooms/initial-room/go-outside/sneak"
import Spy from "./rooms/initial-room/go-outside/spy"
import WalkOut from "./rooms/initial-room/go-outside/walk-out"
import BoardGame from "./rooms/initial-room/play-sister/board-game"
import Whitespace from "./rooms/initial-room/play-sister/board-game/whitepsace"
import Pretend from "./rooms/initial-room/play-sister/pretend"
import Toys from "./rooms/initial-room/play-sister/toys"
import VideoGames from "./rooms/initial-room/play-sister/video-games"
import AdventureGame from "./rooms/initial-room/play-ipod/adventure-game"
import Nothing from "./rooms/initial-room/play-ipod/nothing"
import Puzzle from "./rooms/initial-room/play-ipod/puzzle"
import Texty from "./rooms/initial-room/play-ipod/texty"
import BreakWindow from "./rooms/initial-room/go-outside/break/break-window"
import BounceWindow from "./rooms/initial-room/go-outside/break/bounce-window"
import Door from "./rooms/initial-room/go-outside/break/bounce-window/door"
import GiveUp from "./rooms/initial-room/go-outside/break/bounce-window/give-up"
import KeepTrying from "./rooms/initial-room/go-outside/break/bounce-window/keep-trying"
import Window from "./rooms/initial-room/go-outside/break/bounce-window/window"
import North from "./rooms/initial-room/go-outside/break/break-window/north"
import East from "./rooms/initial-room/go-outside/break/break-window/east"
import West from "./rooms/initial-room/go-outside/break/break-window/west"
import ExploreTemple from "./rooms/initial-room/play-ipod/adventure-game/explore-temple"
import DoNothing from "./rooms/initial-room/play-ipod/adventure-game/do-nothing"
import Housecat from "./rooms/initial-room/play-ipod/adventure-game/do-nothing/housecat"
import KeepGoing from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/keep-going"
import KeepGoingFurther from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/keep-going/keep-going-further"
import PullLever from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever"
import TempleLeft from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-left"
import TempleRight from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right"
import Kitty from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/kitty"
import StandThere from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/stand-there"
import TempleCenter from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/stand-there/temple-center"
import GrabStatue from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/stand-there/temple-center/grab-statue"
import LeaveStatue from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/stand-there/temple-center/grab-statue/leave-statue"
import TempleRightEnd from "./rooms/initial-room/play-ipod/adventure-game/explore-temple/pull-lever/temple-right/temple-right-end"

export default function(props) {
    const { room, roomCount } = props.state
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
        case "go-outside": {
          return (
            <div className="room">
              <GoOutside handler={props.handler}/>
            </div>
          )
        }
        case "stay-inside": {
          return (
            <div className="room">
              <StayInside handler={props.handler}/>
            </div>
          )
        }
        case "play-sister": {
          return (
            <div className="room">
              <PlaySister handler={props.handler}/>
            </div>
          )
        }
        case "play-ipod": {
          return (
            <div className="room">
              <PlayIpod handler={props.handler}/>
            </div>
          )
        }
        case "scream": {
          return (
            <div className="room">
              <Scream handler={props.handler}/>
            </div>
          )
        }
        case "decide-shadow": {
          return (
            <div className="room">
              <DecideShadow handler={props.handler}/>
            </div>
          )
        }
        case "shrug-bed": {
          return (
            <div className="room">
              <ShrugBed handler={props.handler}/>
            </div>
          )
        }
        case "outside-play": {
          return (
            <div className="room">
              <OutsidePlay handler={props.handler}/>
            </div>
          )
        }
        case "break": {
          return (
            <div className="room">
              <Break handler={props.handler}/>
            </div>
          )
        }
        case "sneak": {
          return (
            <div className="room">
              <Sneak handler={props.handler}/>
            </div>
          )
        }
        case "spy": {
          return (
            <div className="room">
              <Spy handler={props.handler}/>
            </div>
          )
        }
        case "walk-out": {
          return (
            <div className="room">
              <WalkOut handler={props.handler}/>
            </div>
          )
        }
        case "board-game": {
          return (
            <div className="room">
              <BoardGame handler={props.handler}/>
            </div>
          )
        }
        case "pretend": {
          return (
            <div className="room">
              <Pretend handler={props.handler}/>
            </div>
          )
        }
        case "toys": {
          return (
            <div className="room">
              <Toys handler={props.handler}/>
            </div>
          )
        }
        case "video-games": {
          return (
            <div className="room">
              <VideoGames handler={props.handler}/>
            </div>
          )
        }
        case "adventure-game": {
          return (
            <div className="room">
              <AdventureGame handler={props.handler}/>
            </div>
          )
        }
        case "nothing": {
          return (
            <div className="room">
              <Nothing handler={props.handler}/>
            </div>
          )
        }
        case "puzzle": {
          return (
            <div className="room">
              <Puzzle handler={props.handler}/>
            </div>
          )
        }
        case "texty": {
          return (
            <div className="room">
              <Texty handler={props.handler}/>
            </div>
          )
        }
        case "break-window": {
          return (
            <div className="room">
              <BreakWindow handler={props.handler}/>
            </div>
          )
        }
        case "bounce-window": {
          return (
            <div className="room">
              <BounceWindow handler={props.handler}/>
            </div>
          )
        }
        case "door": {
          return (
            <div className="room">
              <Door handler={props.handler}/>
            </div>
          )
        }
        case "give-up": {
          return (
            <div className="room">
              <GiveUp handler={props.handler}/>
            </div>
          )
        }
        case "keep-trying": {
          return (
            <div className="room">
              <KeepTrying handler={props.handler}/>
            </div>
          )
        }
        case "window": {
          return (
            <div className="room">
              <Window handler={props.handler}/>
            </div>
          )
        }
        case "........": {
          return (
            <div className="room">
              <Whitespace handler={props.handler}/>
            </div>
          )
        }
        case "north": {
          return (
            <div className="room">
              <North handler={props.handler}/>
            </div>
          )
        }
        case "east": {
          return (
            <div className="room">
              <East handler={props.handler}/>
            </div>
          )
        }
        case "west": {
          return (
            <div className="room">
              <West handler={props.handler}/>
            </div>
          )
        }
        case "explore-temple": {
          return (
            <div className="room">
              <ExploreTemple handler={props.handler}/>
            </div>
          )
        }
        case "pull-lever": {
          return (
            <div className="room">
              <PullLever handler={props.handler}/>
            </div>
          )
        }
        case "temple-left": {
          return (
            <div className="room">
              <TempleLeft handler={props.handler}/>
            </div>
          )
        }
        case "temple-right": {
          return (
            <div className="room">
              <TempleRight handler={props.handler}/>
            </div>
          )
        }
        case "kitty": {
          return (
            <div className="room">
              <Kitty handler={props.handler}/>
            </div>
          )
        }
        case "temple-right-end": {
          return (
            <div className="room">
              <TempleRightEnd handler={props.handler}/>
            </div>
          )
        }
        case "keep-going": {
          return (
            <div className="room">
              <KeepGoing handler={props.handler}/>
            </div>
          )
        }
        case "keep-going-further": {
          return (
            <div className="room">
              <KeepGoingFurther handler={props.handler}/>
            </div>
          )
        }
        case "stand-there": {
          return (
            <div className="room">
              <StandThere handler={props.handler}/>
            </div>
          )
        }
        case "temple-center": {
          return (
            <div className="room">
              <TempleCenter handler={props.handler}/>
            </div>
          )
        }
        case "grab-statue": {
          return (
            <div className="room">
              <GrabStatue handler={props.handler}/>
            </div>
          )
        }
        case "leave-statue": {
          return (
            <div className="room">
              <LeaveStatue handler={props.handler}/>
            </div>
          )
        }
        case "do-nothing": {
          return (
            <div className="room">
              <DoNothing handler={props.handler}/>
            </div>
          )
        }
        case "housecat": {
          return (
            <div className="room">
              <Housecat handler={props.handler}/>
            </div>
          )
        }
        case "end": {
          return (
            <div className="room">
              <End handler={props.handler} roomCount={roomCount}/>
            </div>
          )
        }
        default: {
          return (
            <div className="room">
              {/* <h3 onClick={() => props.handler("start")}>How did we get here?</h3> */}
              <Default handler={props.handler}/>
            </div>
          )
        }
    }
}