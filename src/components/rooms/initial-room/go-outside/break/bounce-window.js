import React from 'react'

export default function(props) {
    return (
        <div className="bounce-window">
            <p className="output">You bounced! Not so commando are you? Do you:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("give-up")}>Give up. It's not worth it having your parents kill you for breaking a window</p>
            <p className="button" onClick={() => props.handler("keep-trying")}>Keep trying till you make it?</p>
            <p className="button" onClick={() => props.handler("door")}>Just use the door and hope nobody saw you smash your face</p>
            <p className="button" onClick={() => props.handler("window")}>Open the window and crawl out</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}