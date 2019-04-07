import React from 'react'

export default function(props) {
    return (
        <div className="break-window">
            <p className="output">You broke through just like the commando you are! The windows smashed but hey you got out. Which way do you go now?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("north")}>North. Thats where all the moss grows and shadows are definately related to moss.</p>
            <p className="button" onClick={() => props.handler("east")}>East. Sun comes up from the east. And shadows love the sun.</p>
            <p className="button" onClick={() => props.handler("west")}>West. There just is something suspicous about West. You've never trusted that direction.</p>
            <p className="button" onClick={() => props.handler("south")}>South. Ducks fly south. So suspicous shadows probably do too.</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}