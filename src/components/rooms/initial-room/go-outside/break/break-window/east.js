import React from 'react'

export default function(props) {
    return (
        <div className="east">
            <p className="output">~Here comes the sun do doo do do!~<br/><br/>
           ~There goes your eyes do doo do do!~<br/><br/>
           ~Wish you had shades do-o-on't you?~<br/><br/>
That would be a fantabulous idea! You could see AND look super cool. But, where
to get the sunglasses?</p>
            <div className="buttons">
            <p className="button" onClick={() => props.handler("house")}>From your House</p>
            <p className="button" onClick={() => props.handler("store")}>From the store</p>
            <p className="button" onClick={() => props.handler("hobo-joe")}>From Hobo Joe</p>

            <p className="secret-button" onClick={() => props.handler("end")}></p>
            </div>
        </div>
    )
}