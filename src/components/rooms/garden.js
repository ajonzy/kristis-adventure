import React from 'react'

export default function(props) {
    return (
        <div className="garden">
            <p className="output">You take a lovely stroll through the garden</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("outside")}>How nice :)</p>
            </div>
        </div>
    )
}