import React from 'react'

export default function(props) {
    return (
        <div className="shrug-bed">
            <p className="output">You just shrug and jump back in bed. Well you can't get away from an adventure that easy. What do you dream about?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("nothing")}>Nothing. The stupid Mexican neighbors are playing their music, their birds are chirping, and their kids are screaming. Plus the kids accross the street are playing their loud music and womp womp womp on the basket ball. boy I think you need to move.</p>
            <p className="button" onClick={() => props.handler("daydream")}>A Day Dream! You just lie in bed for someplace to be. Using your imagination. Good for you. -what kind of adventure</p>
            <p className="button" onClick={() => props.handler("school")}>School. -Horror of all horrors! What a Nightmare! Its Saturday! SATURDAY. no school. What on earth is wrong with you?!</p>
            <p className="button" onClick={() => props.handler("adventure")}>An Adventure. -soo why did you go back in bed if you wanted an adventure?</p>
            <p className="button" onClick={() => props.handler("stick")}>About a stick.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}