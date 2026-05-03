import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choice: "",
            buttonOutput: ["A mighty lion!", "A regal eagle!", "Hobo Joe...", "No, I think I'll leave it here and head back out to the jungle", "Um, of course!", "_"],
            index: 0
        }

        this.handleOutputChange = this.handleOutputChange.bind(this)
    }

    handleOutputChange(choice) {
        this.setState({
            choice: choice,
            index: 3
        })
    }

    render() {
        return (
            <div className="temple-right">
                <p className="output">{this.state.index == 0 ? "You confidently stride out of the hallway and into a large room decked head to toe in gold and sparkly gems! In the center is a pedastool with a beautiful statuette resting upon it... What does it look like?" : `Ah yes, ${this.state.choice} Well, regardless of what it looks like, are you going to snag it?`}</p>
                <div className="buttons">

                <p className="button" onClick={this.state.index == 0 ? () => this.handleOutputChange("a mighty lion!") : () => this.props.handler("explore-jungle")}>{this.state.buttonOutput[this.state.index]}</p>

                <p className="button" onClick={this.state.index == 0 ? () => this.handleOutputChange("a regal eagle!") : () => this.props.handler("grab-statue")}>{this.state.buttonOutput[this.state.index + 1]}</p>

                <p className="button" style={{display: this.state.index == 0 ? "flex" : "none"}} onClick={this.state.index == 0 ? () => this.handleOutputChange("Hobo Joe... that makes sense?") : null}>{this.state.buttonOutput[this.state.index + 2]}</p>

                <p className="secret-button" style={{display: this.state.index == 0 ? "flex" : "none"}} onClick={() => this.handleOutputChange("ummmm... a strange alien with four arms... and is that a crop top it's wearing?!")}></p>
                </div>
            </div>
        )
    }
}