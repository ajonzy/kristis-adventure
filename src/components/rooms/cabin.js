import React from 'react'

export default function(props) {
    return (
        <div className="cabin">
            <p className="output">You are in a small cabin. There is a fire going in the fireplace, and a staircase in the corner.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("fire")}>Stoke the fire</p>
            <p className="button" onClick={() => props.handler("upstairs")}>Go up the stairs</p>
            <p className="button" onClick={() => props.handler("outside")}>Go outside</p>
            </div>
        </div>
    )
}