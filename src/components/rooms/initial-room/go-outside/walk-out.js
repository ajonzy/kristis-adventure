import React from 'react'

export default function(props) {
    return (
        <div className="walk-out">
            <p className="output">You just walked out the door and something zoomed by your head do you:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("jump-back")}>Jump back in surprise</p>
            <p className="button" onClick={() => props.handler("forget-it")}>Turn around, go back inside and forget this ever happened.</p>
            <p className="button" onClick={() => props.handler("reflexes")}>Use your mad reflexes to catch the thing</p>
            <p className="button" onClick={() => props.handler("stoic")}>Don’t even flinch</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}