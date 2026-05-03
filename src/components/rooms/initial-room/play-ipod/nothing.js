import React from 'react'

export default function(props) {
    return (
        <div className="nothing">
            <p className="output">So we are staring, staring, staring. Suddenly the thought comes to you, 'I bet
this would be more fun if I actually remembered to charge my Ipod...' Well, its too
late now. You decide to charge it. While looking for your charger, you discover that
its missing! Gasp! Did someone steal it?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("charger-yes")}>Yes!</p>
            <p className="button" onClick={() => props.handler("charger-no")}>No.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}