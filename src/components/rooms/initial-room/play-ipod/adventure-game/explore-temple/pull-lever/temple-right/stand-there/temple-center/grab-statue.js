import React from 'react'

export default function(props) {
    return (
        <div className="grab-statue">
            <p className="output">You grab the statuette, but suddenly there is an angry hissing noise behind you! You turn around to see snakes slithering out of holes in the wall! What, did you think I'd let you get all the way through a jugle temple without at least one snake trap?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("run-statue")}>Run for it!!!</p>
            <p className="button" onClick={() => props.handler("leave-statue")}>Put the statue back and apologize to the snakes</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}