import React from 'react'

export default function(props) {
    return (
        <div className="explore-temple">
            <p className="output">Finding yourself at the temple entance, you cautiously enter. Oh my, it's pretty dark in here! It looks like there's a lever on the wall... that might be the lightswitch! Do you pull it, or try and make your way in the dark?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("pull-lever")}>Pull the lever, Kronk!</p>
            <p className="button" onClick={() => props.handler("keep-going")}>That... is clearly a trap! Keep going!</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}