import React from 'react'

export default function(props) {
    return (
        <div className="door">
            <p className="output">Like a sensible person, you pretended that didn't happen. But it did.
The shadow totally witnessed your face squish and took a picture. Now you have
more than one reason to find them!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("walk-out")}>Oh, they're going down!</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}