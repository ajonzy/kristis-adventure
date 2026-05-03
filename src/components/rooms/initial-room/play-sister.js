import React from 'react'

export default function(props) {
    return (
        <div className="play-sister">
            <p className="output">You decided to play with your older sister. She is exstatic! exstatic? estatic? Super Happy! What do you play?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("video-games")}>Video Games! Yah Bra!</p>
            <p className="button" onClick={() => props.handler("pretend")}>Pretend! We can do whatever we want to!</p>
            <p className="button" onClick={() => props.handler("board-game")}>A Board or Card Game! Yah Retro fun!</p>
            <p className="button" onClick={() => props.handler("toys")}>With toys! Just like old times.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}