import React from 'react'

export default function(props) {
    return (
        <div className="break">
            <p className="output">You decided to break through the glass commando style. Quick question do you bounce or break it?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("break-window")}>Break!</p>
            <p className="button" onClick={() => props.handler("bounce-window")}>Bounce!</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}