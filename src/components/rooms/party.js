import React from 'react'

export default function(props) {
    return (
        <div className="party">
            <p className="output">As you turn around, all your friends jump from their hiding places! "Surprise!" they yell... It's a surpeise party just for you!<br/><br/>Best of all, it's a surprise PIZZA party ;)<br/><br/>Play again?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("initial-room")}>Yes</p>
            <p className="button" onClick={() => props.handler("end")}>No</p>
            </div>
        </div>
    )
}