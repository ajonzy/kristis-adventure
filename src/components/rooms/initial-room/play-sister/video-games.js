import React from 'react'

export default function(props) {
    return (
        <div className="video-games">
            <p className="output">Woot Woot! VideoGames ya ha! So what do you want to play?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("classic")}>Something classic like Dr. Mario, Root Beer Tapper, Rampage, or PacMan</p>
            <p className="button" onClick={() => props.handler("racing")}>A racing game like MarioKart! With the honk honk and the beep beep and the vroom vroom.</p>
            <p className="button" onClick={() => props.handler("rock-out")}>Rock out man! Guitar Hero or Rock Band! Are you a highway star?</p>
            <p className="button" onClick={() => props.handler("mario-party")}>Lets have a Mario Party! woo hoo hoo!</p>
            <p className="button" onClick={() => props.handler("wii")}>Lets steal someone's Wii and play those games!</p>
            <p className="button" onClick={() => props.handler("toys")}>Ds party! yah buddy!</p>
            <p className="button" onClick={() => props.handler("ds")}>Battle Block Theater or Castle Crashers!</p>
            <p className="button" onClick={() => props.handler("disneyland")}>Disneyland Parks!!</p>
            <p className="button" onClick={() => props.handler("temple-run")}>Do head to head Temple Run.</p>
            <p className="button" onClick={() => props.handler("computer")}>To heck with these console games! Lets jump on the computer and play Arcade Frenzy</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}