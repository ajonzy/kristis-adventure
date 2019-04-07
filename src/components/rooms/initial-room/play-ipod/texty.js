import React from 'react'

export default function(props) {
    return (
        <div className="texty">
            <p className="output">A Texty App with your best friend?! Really?! Don't you have a phone?! You're
always texting theeeeeem! Why don't you pay attention to meeeee?! Rude. No, I
won't accept this.
While you were texting, totally ignoring me! (How is that possible?!) The Shadow
makes two more passes and finally smacks the window! In surprise you 'accidentally'
fling your Ipod across the room! Oh Nos! (yah serves ya right you little...)
You have a pillow right next to you. To save your Ipod what do you do?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("pillow-dive")}>Grab the pillow and dive for it!</p>
            <p className="button" onClick={() => props.handler("pillow-throw")}>Throw the pillow so the Ipod lands on it!</p>
            <p className="button" onClick={() => props.handler("drop")}>Let it drop.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}