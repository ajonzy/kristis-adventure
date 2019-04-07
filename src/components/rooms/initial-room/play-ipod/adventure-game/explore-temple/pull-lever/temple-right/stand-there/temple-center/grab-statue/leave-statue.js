import React from 'react'

export default function(props) {
    return (
        <div className="leave-statue">
            <p className="output">The snakes seem to accept your apology. They'll let you leave and head out into the jungle... See, being polite pays off!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("explore-jungle")}>Yay?</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}