import React from 'react'

export default function(props) {
    return (
        <div className=".......">
            <p className="output">Slowly, ever so slowly, you flutter your eyes. And sit up. Where the heck are you?
Everything here looks, wonky. The floor looks like a board game. Wait? A BOARD GAME?
Where are you? You decided to follow the path. Suddenly you come to a sign. Unfortunately
the sign doesn't have all the pieces. Near the bottom is a note that reads:
Dear Player,
I destroyed and reArranged the sign just for you! You are WeLcoMe.
No, I did not make ThiS out of Old MagaziNe PiEces to look like a randsom note....
Yours Truely,
The Narrorator.
Which path did you take: </p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("pirates")}>Luck</p>
            <p className="button" onClick={() => props.handler("cowboys")}>Stab that man!</p>
            <p className="button" onClick={() => props.handler("outer-space")}>Die World!</p>
            <p className="button" onClick={() => props.handler("medieval")}>Cardigans.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}