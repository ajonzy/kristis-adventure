import React from 'react'

export default function(props) {
    return (
        <div className="keep-going-further">
            <p className="output">So what if it's dark? You'll just use your spidey-senses to avoid all traps! Oh ho ho... <br/><br/>Well, it turns out you should have been using your scorpion-senses instead, because without any light this place is full of them! They decide that they don't appreciate you stepping all over them in the dark, and are going to chase you!</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("explore-temple")}>Oh noooooes! Run away! Back to the entrance!</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}