import React from 'react'

export default function(props) {
    return (
        <div className="woods">
            <p className="output">You wander the woods for what seems like hours before realizing you have no idea where you are!<br/><br/>You are lost :(<br/><br/>Play again?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("initial-room")}>Yes</p>
            <p className="button" onClick={() => props.handler("end")}>No</p>
            </div>
        </div>
    )
}