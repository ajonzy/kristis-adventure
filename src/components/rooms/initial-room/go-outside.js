import React from 'react'

export default function(props) {
    return (
        <div className="go-outside">
            <p className="output">You decided to go out and investigate, but how are you going to do it?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("break")}>Break through the glass comando style</p>
            <p className="button" onClick={() => props.handler("sneak")}>Sneak around like the silent ninja you are</p>
            <p className="button" onClick={() => props.handler("walk-out")}>Just walk out the door. Psh! it was just a shadow.</p>
            <p className="button" onClick={() => props.handler("spy")}>Be cautious like a spy and use mirrors around corners.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}