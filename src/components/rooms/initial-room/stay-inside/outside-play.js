import React from 'react'

export default function(props) {
    return (
        <div className="outside-play">
            <p className="output">You went outside to play! Aw just like old times! What do you want to do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("stick")}>Play with a stick!</p>
            <p className="button" onClick={() => props.handler("park")}>Go to the park!</p>
            <p className="button" onClick={() => props.handler("scooter")}>Scooter down the hill.</p>
            <p className="button" onClick={() => props.handler("wagon")}>Get the wagon out of the shed.</p>
            <p className="button" onClick={() => props.handler("rollerskate")}>Pull a Kaitlyn and rollerskate with crutches.</p>
            <p className="button" onClick={() => props.handler("hopscotch")}>HOPSCOTCH!!! and you know, play with chalk -have chalk drawings and monster.</p>
            <p className="button" onClick={() => props.handler("gondola")}>Pretend the green thing is a gondola and row across the street.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}