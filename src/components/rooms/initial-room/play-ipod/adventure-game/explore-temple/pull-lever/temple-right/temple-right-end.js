import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            output: [
                "Oh ho ho, that should look sweet! But as you go to line up your super sweet menuever, you trip and stumble right into the path of the trap, and...", "Oh, ok... Where does it teleport you to?"
            ],
            buttonOutput: ["Hang on, I have a teleporter in my pocket!", "Back to the entrance!"],
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
            <div className="temple-right-end">
                <p className="output">{this.state.output[this.state.index]}</p>
                <div className="buttons">
                <p className="button" onClick={this.state.index == 0 ? this.handleOutputChange : () => this.props.handler("explore-temple")}>{this.state.buttonOutput[this.state.index]}</p>
                <p className="button" style={{display: this.state.index == 0 ? "none" : "flex"}} onClick={() => this.props.handler("explore-jungle")}>Ummm, this place is dangerous, lets go back to the jungle instead...</p>
                <p className="button" style={{display: this.state.index == 0 ? "none" : "flex"}} onClick={() => this.props.handler("go-home")}>Yo, can this thing get me back home?</p>
                <p className="secret-button" onClick={() => props.handler("end")}></p>
                </div>
            </div>
        )
    }
}