import React from 'react'

export default function(props) {
    return (
        <div className="initial-room">
            <p className="output">You decided to Scream and throw something at the tv. But wouldn't you know it, you happened to have a fancy pants tv. What does it do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("laser-blaster")}>A Laser Blaster comes out and destroys the remote you threw!-Enraged you keep throughing things until there is an empty spot where you house is and a tv.</p>
            <p className="button" onClick={() => props.handler("bounce-back")}>It bounces back and beans you in the head. (wow... genious.)</p>
            <p className="button" onClick={() => props.handler("smoking-hole")}>It used to be a flat screen, now its a smoking hole screen...</p>
            <p className="button" onClick={() => props.handler("cranky-face")}>It bounced off and a big cranky Face appeared on the TV. O-O</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}