import React from 'react'

export default function(props) {
    return (
        <div className="give-up">
            <p className="output">You are so right, it's not worth it. Unfortunately your sister thinks otherwise...
She grabs you and you both go smashing through! She gets up, brushes herself off,
says, 'You're welcome.' and walks back in the house through the door. You
know you need to replace the window before your parents come back. What do you do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("get-job")}>Get a job to pay for it.</p>
            <p className="button" onClick={() => props.handler("rob-bank")}>Rob a bank.</p>
            <p className="button" onClick={() => props.handler("tape")}>Tape it back together.</p>
            <p className="button" onClick={() => props.handler("window-nothing")}>Nothing they'll never notice.</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}