import React from 'react'

export default function(props) {
    return (
        <div className="spy">
            <p className="output">You start using a mirror but it kind of looks:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("shiny")}>Shiny!</p>
            <p className="button" onClick={() => props.handler("cracked")}>Cracked!</p>
            <p className="button" onClick={() => props.handler("creepy")}>Creepy....</p>
            <p className="button" onClick={() => props.handler("beautiful")}>Beautiful! (You Narcissus you!)</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
} 