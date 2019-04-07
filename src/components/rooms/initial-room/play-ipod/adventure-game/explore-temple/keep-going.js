import React from 'react'

export default function(props) {
    return (
        <div className="keep-going">
            <p className="output">Yeah, you're not falling for that one! Bravely, you waltz into the deep dark of the temple, head held high... Ain't no traps gonna get you, no siree! Ouch! You bang your head against something hard... Apparently there's a wall here :( Boy is is it dark... I don't know about this...</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("explore-temple")}>Yeah, it's just too dark... Go back to the entrance</p>
            <p className="button" onClick={() => props.handler("keep-going-further")}>Nonsense, I got this... Keep going!</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}