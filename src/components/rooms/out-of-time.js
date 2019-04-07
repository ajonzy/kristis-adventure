import React from 'react'

export default function(props) {
    return (
        <div className="default">
            <p className="output">The sands of time have run out, and it is time for you to go to bed for the night and try again tomorrow...<br/><br/>Convenient... Like someone didn't finish this part of the story or something...</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("start")}>Try a new path</p>
            <p className="button" onClick={() => props.handler("end")}>Quit</p>
            </div>
        </div>
    )
}