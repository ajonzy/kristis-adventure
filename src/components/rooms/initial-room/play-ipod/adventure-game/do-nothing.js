import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choice: "",
            output: ["What? Nothing?! That's boring! Ok, fine... You close your eyes and do nothing. Sound of wildlife surround you... Birds are chirping, monkeys are screaching, the jaguar behind you is growling...", "Yes, as you look behind you, you see a jaguar stalking towards you... And to your left, a black panther... And to your right, a hungry tiger... And worst of all, approaching from the front... A fluffy housecat!!! Which way do you run?"],
            buttonOutput: ["What?!", "Left, towards the panther", "Whew! Ok, now where am I?", "Right, towards the tiger", "Behind you, yowards the jaguar", "Straight ahead, towards the fluffy housecat :3"],
            index: 0
        }

        this.handleOutputChange = this.handleOutputChange.bind(this)
    }

    handleOutputChange(choice) {
        this.setState({
            choice: choice,
            index: ++this.state.index
        })
    }

    render() {
        return (
            <div className="do-nothing">
                <p className="output">{this.state.index < 2 ? this.state.output[this.state.index] : `With a burst of speed, you run straight towards the ferocious feline, dodging it's razor sharp teeth and claws, and running as far away from the ${this.state.choice} as possible! Whew, you made it!`}</p>
                <div className="buttons">

                <p className="button" onClick={this.state.index < 2 ? () => this.handleOutputChange("panther") : () => this.props.handler("explore-jungle")}>{this.state.buttonOutput[this.state.index]}</p>

                <p className="button" style={{display: this.state.index == 1 ? "flex" : "none"}} onClick={() => this.handleOutputChange("tiger")}>{this.state.buttonOutput[this.state.index + 2]}</p>

                <p className="button" style={{display: this.state.index == 1 ? "flex" : "none"}} onClick={() => this.handleOutputChange("jaguar")}>{this.state.buttonOutput[this.state.index + 3]}</p>

                <p className="button" style={{display: this.state.index == 1 ? "flex" : "none"}} onClick={() => this.props.handler("housecat")}>{this.state.buttonOutput[this.state.index + 4]}</p>

                <p className="secret-button" onClick={() => this.props.handler("end")}></p>
                </div>
            </div>
        )
    }
}