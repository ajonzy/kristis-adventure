import React from 'react'

export default function(props) {
    return (
        <div className="keep-trying">
            <p className="output">You keep bouncing and bouncing and bouncing and finally you break through!
Why don't we pretend you made it the first time... </p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("break-window")}>Sounds like a plan...</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}