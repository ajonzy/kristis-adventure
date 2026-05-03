import React from 'react'

export default function(props) {
    return (
        <div className="sneak">
            <p className="output">You decided to sneak around like a ninja! Good for you! But what kind of ninja are you?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("stealth-ninja")}>The ultimate stealth mode!</p>
            <p className="button" onClick={() => props.handler("sing-ninja")}>The kind that likes to sing their own theme music. (Wait, that’s not a ninja!)</p>
            <p className="button" onClick={() => props.handler("karate-ninja")}>The kind that goes waka chow! Hi ja and breaks things.</p>
            <p className="button" onClick={() => props.handler("roof-ninja")}>The kind that runs on the roof tops.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}