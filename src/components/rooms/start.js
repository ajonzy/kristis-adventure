import React from 'react'

export default function(props) {
    return (
        <div className="start">
            <p className="output">Welcome to the Game!<br/>Ready to start?</p>
            <div className="buttons">
                <p className="button" onClick={() => props.handler("initial-room", false)}>Yes!</p>
                <p className="button" onClick={() => props.handler("end")}>No...</p>
            </div>
        </div>
    )
}