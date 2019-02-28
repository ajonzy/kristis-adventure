import React from 'react'

export default function(props) {
    return (
        <div className="outside">
            <p className="output">You are outside. It's a lovely day!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("garden")}>Stroll through the garden</p>
            <p className="button" onClick={() => props.handler("woods")}>Wander in the creepy nearby woods</p>
            <p className="button" onClick={() => props.handler("initial-room")}>Go inside</p>
            </div>
        </div>
    )
}