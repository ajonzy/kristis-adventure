import React from 'react'

export default function(props) {
    return (
        <div className="kitty">
            <p className="output">Horror of horrors! I won't even dare to describe the carnage of the aweful scene that follows *shudders* Needless to say, you didn't make it... Here, have an extra life, I'll see you back at the temple entrance.</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("explore-temple")}>I don't know what I was expecting...</p>
            </div>
        </div>
    )
}