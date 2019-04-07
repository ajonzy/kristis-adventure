import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            output: [
                "Heading West you come across a suscpicious looking stick! :o Hmm you definately don't trust this stick in the hands of anyone else, but then there is another! and Another! Oh noes! You decide there are far too many sticks out this direction for someone to use AGAINST you! D: You come up with a brilliant Idea! You must collect all the sticks and THEN when nobody ELSE can use them against you, you'll finally be able to find that shadow. Good idea. Good idea.", "In your quest for total stick domination you decided to start out at the park. Soon you see Johnny grabbing all the sticks too! 'HEY! WHAT ARE YOU DOING?' Johnny smiles evilly at you and grabs the rest of the sticks. 'Too late SUCKER!!' He screams while becoming a small dot on the horizon. Boy that cheeses you off. Now where are you going to get sticks?"
            ],
            buttonOutput: [
                "Get all the sticks! >:D", "Follow Johnny!! HE SHALL RUE THE DAY..."
            ],
            index: 0
        }

        this.handleOutputChange = this.handleOutputChange.bind(this)
    }

    handleOutputChange() {
        this.setState({
            index: ++this.state.index
        })
    }

    render() {
        return (
            <div className="west">
                <p className="output">{this.state.output[this.state.index]}</p>
                <div className="buttons">
                <p className="button" onClick={this.state.index == 0 ? this.handleOutputChange : () => props.handler("johnny")}>{this.state.buttonOutput[this.state.index]}</p>
                <p className="button" style={{display: this.state.index == 0 ? "none" : "flex"}} onClick={() => props.handler("stick-magenet")}>Go home and get your stick magnet-inator.</p>
                <p className="button" style={{display: this.state.index == 0 ? "none" : "flex"}} onClick={() => props.handler("saw")}>Grab a saw and start attacking all the trees!</p>

                <p className="secret-button" onClick={() => props.handler("end")}></p>
                </div>
            </div>
        )
    }
}