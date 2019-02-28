import React from 'react'

export default function(props) {
    return (
        <div className="fire">
            <p className="output">You stoke the fire. That will keep the place nice and warm!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("cabin")}>Nice!</p>
            </div>
        </div>
    )
}