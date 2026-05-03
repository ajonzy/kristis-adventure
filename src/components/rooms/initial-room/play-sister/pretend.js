import React from 'react'

export default function(props) {
    return (
        <div className="pretend">
            <p className="output">They say we are what we are, but we don't have to be. What do you want to pretend?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("pirates")}>Yarrr we be Pirates!</p>
            <p className="button" onClick={() => props.handler("cowboys")}>Yeee Hah! Partner! Cowboys!!</p>
            <p className="button" onClick={() => props.handler("outer-space")}>Pew! Pew! Outer Space!</p>
            <p className="button" onClick={() => props.handler("medieval")}>Hear ye, Hear ye! We shall sally forth of a time medieval.</p>
            <p className="button" onClick={() => props.handler("supernatural")}>Something supernatural.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}