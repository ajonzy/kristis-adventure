import React from 'react'

export default function(props) {
    return props.keyFound ? (
        <div className="upstairs">
            <p className="output">You climb the stairs. At the top of the stairs is a locked door... But you have a key! You unlock the door and inside is a comfy looking bed.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("sleep")}>Go to sleep</p>
            <p className="button" onClick={() => props.handler("cabin")}>Go downstairs</p>
            </div>
        </div>
        ) : (
        <div className="upstairs">
            <p className="output">You climb the stairs. At the top of the stairs is a locked door... I wonder what's inside?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("cabin")}>Go downstairs</p>
            </div>
        </div>
    )
}