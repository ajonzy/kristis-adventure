import React from 'react'

export default function(props) {
    return (
        <div className="puzzle">
            <p className="output">A Murder Game? Why didn't the shadow interest you Sherlock? Well as you were playing
something goes terribly wrong. A storm comes out of nowhere, there was a scream in the
dark and suddenly, you are in your own game! DUN DUN DUNNN
What do you do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("join-detective")}>Join the Detective to look for clues!</p>
            <p className="button" onClick={() => props.handler("be-detective")}>Who needs a Detective? You'll be the Detective!</p>
            <p className="button" onClick={() => props.handler("cry")}>Cry.</p>
            <p className="button" onClick={() => props.handler("talk")}>Talk to someone.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}