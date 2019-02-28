import React from 'react'

export default function(props) {
    return (
        <div className="end">
            <p className="output">Ok, goodbye!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("start")}>Restart</p>
            </div>
        </div>
    )
}