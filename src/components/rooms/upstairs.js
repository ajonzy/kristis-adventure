import React from 'react'

export default function(props) {
    return (
        <div className="upstairs">
            <p className="output">You climb the stairs. Upstairs is a comfy looking bed.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("sleep")}>Go to sleep</p>
            <p className="button" onClick={() => props.handler("cabin")}>Go downstairs</p>
            </div>
        </div>
    )
}