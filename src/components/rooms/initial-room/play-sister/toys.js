import React from 'react'

export default function(props) {
    return (
        <div className="toys">
            <p className="output">ToyLand! ToyLand! Little Girl and Boy Land! La La La Lah, yah okay, I totally forgot the song.
Any hoozles! (hoozles? huh, I suddenly want to start singing about weasles..)
What on earth do you want to play my lovely?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("stuffed-animals")}>Stuffed Animals obviously!</p>
            <p className="button" onClick={() => props.handler("barbies")}>With our old Barbies! -riiiiight. 'old' barbie is it?</p>
            <p className="button" onClick={() => props.handler("trucks")}>Trucks in the dirt!</p>
            <p className="button" onClick={() => props.handler("leg-pirates")}>Lego Pirates! Yar har har!</p>
            <p className="button" onClick={() => props.handler("action-figure")}>Action figures like Spiderman! *gasp! Spiderman?!*</p>
            <p className="button" onClick={() => props.handler("dollies")}>Dollies!</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}