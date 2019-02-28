import React from 'react'

export default function(props) {
    return (
        <div className="initial-room">
            <p className="output">You find yourself in a room. There's a door leading outside.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("cabin")}>Inspect the room</p>
            <p className="button" onClick={() => props.handler("outside")}>Go outside</p>
            </div>
        </div>
    )
}