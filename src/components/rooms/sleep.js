import React from 'react'

export default function(props) {
    return (
        <div className="sleep">
            <p className="output">You go to sleep after a long day. <br/><br/>Get some well deserved rest :)<br/><br/>Play again?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("initial-room")}>Yes</p>
            <p className="button" onClick={() => props.handler("end")}>No</p>
            </div>
        </div>
    )
}