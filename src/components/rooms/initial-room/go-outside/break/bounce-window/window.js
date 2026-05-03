import React from 'react'

export default function(props) {
    return (
        <div className="window">
            <p className="output">Crawling out the window! Wait, wait a minute I think you, yup. You got
stuck. How you gonna get yourself out of this one genius?:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("utility-belt")}>With your handy dandy Bat Utility Belt!</p>
            <p className="button" onClick={() => props.handler("butter")}>With that stick of butter you keep in your back pocket.</p>
            <p className="button" onClick={() => props.handler("yell-help")}>You decide to yell for help.</p>
            <p className="button" onClick={() => props.handler("keep-kicking")}>Just keep kicking, you'll get out eventually.</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}