import React from 'react'

export default function(props) {
    return props.keyFound ? (
        <div className="garden">
            <p className="output">You take a lovely stroll through the garden.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("outside")}>How nice :)</p>
            </div>
        </div>
        ) : (
        <div className="garden">
            <p className="output">You take a lovely stroll through the garden... What's that? There's a mysterious key lying in the path...</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("outside")}>Ignore it</p>
            <p className="button" onClick={() => props.handler("outside", true)}>Pick it up!</p>
            </div>
        </div>
    )
}