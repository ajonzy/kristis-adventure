import React from 'react'

export default function(props) {
    return (
        <div className="decide-shadow">
            <p className="output">Once upon a time you were sitting in the living room when a shadow passed across the window outside do you:</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("utility-belt")}>Use your shadow tracker you conveniently have in your Bat Utility Belt.</p>
            <p className="button" onClick={() => props.handler("bloodhound")}>Use your shadow tracking bloodhound.</p>
            <p className="button" onClick={() => props.handler("police")}>Call the police! They'll know what it was!</p>
            <p className="button" onClick={() => props.handler("narrator")}>Ask the narrorator. Well I hope you ask nicely... with flowers and chocolates.</p>
            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}