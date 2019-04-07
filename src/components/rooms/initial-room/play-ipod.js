import React from 'react'

export default function(props) {
    return (
        <div className="play-ipod">
            <p className="output">Ho hum. You decided to play on your ipod. again. What do you play?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("texty")}>Texty App with your best friend. (really? don't you have a phone?!)</p>
            <p className="button" onClick={() => props.handler("adventure-game")}>An adventure game like Temple Run! (working on your reflexes eh tiger?)</p>
            <p className="button" onClick={() => props.handler("puzzle")}>A puzzle murder game! (so why didn't the shadow interest you Sherlock?)</p>
            <p className="button" onClick={() => props.handler("nothing")}>Nothing. You just stare at it.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}