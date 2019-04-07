import React from 'react'

export default function(props) {
    return (
        <div className="adventure-game">
            <p className="output">An adventure game! You flip through all your apps and decide to do Temple Run!
Classic! You play for a while, but something feels a little weird here. You are
much more engrossed in your game than usual. Blinking you rub your eyes and look around.
Everything seems a little pixelated. Then Binary and then black. After a while
you everything is now coming into focus. You appear to be in Jungle Ruins. Huh. There
is a temple entrance nearby. What do you do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("explore-temple")}>Go explore the temple!</p>
            <p className="button" onClick={() => props.handler("explore-jungle")}>Go explore the Jungle!</p>
            <p className="button" onClick={() => props.handler("cry")}>Cry.</p>
            <p className="button" onClick={() => props.handler("do-nothing")}>Do nothing.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}