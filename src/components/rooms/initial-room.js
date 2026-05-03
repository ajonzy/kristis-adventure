import React from 'react'

export default function(props) {
    return (
        <div className="initial-room">
            <p className="output">Once upon a time you were sitting in the living room when a shadow passed across the window outside do you:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("go-outside")}>Go outside and investigate</p>
            <p className="button" onClick={() => props.handler("stay-inside")}>Stay inside and watch cartoons</p>
            <p className="button" onClick={() => props.handler("play-sister")}>Play with your older sister</p>
            <p className="button" onClick={() => props.handler("play-ipod")}>Play with your ipod</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}