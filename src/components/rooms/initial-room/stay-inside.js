import React from 'react'

export default function(props) {
    return (
        <div className="stay-inside">
            <p className="output">You decided to stay inside and watch cartoons. Who cares about stupid shadows as long as there is something to watch? 
BUT suddenly! The power went out and in the middle of your favorite cartoon too! Do you:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("scream")}>Scream and throw something at the tv.</p>
            <p className="button" onClick={() => props.handler("decide-shadow")}>Decide it was the shadows fault and are going to go after it.</p>
            <p className="button" onClick={() => props.handler("shrug-bed")}>Shrug and jump back in bed.</p>
            <p className="button" onClick={() => props.handler("outside-play")}>Go outside to play.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}