import React from 'react'

export default function(props) {
    return (
        <div className="pull-lever">
            <p className="output">Oh, clever you! It WAS a lightswitch! as you pull the lever, all the torches in the temple suddenly spring to life and ignite! Before you is an ornately carved hallway leading to an intersection! Do you go left or right?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("temple-left")}>Left</p>
            <p className="button" onClick={() => props.handler("temple-right")}>Right</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}