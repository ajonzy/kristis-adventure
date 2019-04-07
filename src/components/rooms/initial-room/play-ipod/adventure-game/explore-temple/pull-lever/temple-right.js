import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choice: "",
            buttonOutput: ["Poison Darts!", "Flaming Arrows!", "Razor Sharp Axes!", "Awwwww, a fluffy kitty :3", "Ninja roll under all of them!", "Wall jump over the top of them!", "Nothing, just stand there"],
            index: 0
        }

        this.handleOutputChange = this.handleOutputChange.bind(this)
    }

    handleOutputChange(choice) {
        this.setState({
            choice: choice,
            index: 4
        })
    }

    render() {
        return (
            <div className="temple-right">
                <p className="output">{this.state.index == 0 ? "Good choice! Or was it? As you begin to walk down the next hallway, you suddenly feel the block you stepped on sink into the floor... That's never good... Suddenly, something flies out of the wall at you! What is it?" : `Yikes! ${this.state.choice} come flying out of the wall and are headed straight for you! What do you do?`}</p>
                <div className="buttons">

                <p className="button" onClick={this.state.index == 0 ? () => this.handleOutputChange("Poison darts") : () => this.props.handler("temple-right-end")}>{this.state.buttonOutput[this.state.index]}</p>

                <p className="button" onClick={this.state.index == 0 ? () => this.handleOutputChange("Flaming arrows") : () => this.props.handler("temple-right-end")}>{this.state.buttonOutput[this.state.index + 1]}</p>

                <p className="button" onClick={this.state.index == 0 ? () => this.handleOutputChange("Razor sharp axes") : () => this.props.handler("stand-there")}>{this.state.buttonOutput[this.state.index + 2]}</p>

                <p className="button" style={{display: this.state.index == 0 ? "flex" : "none"}} onClick={() => this.props.handler("kitty")}>{this.state.buttonOutput[this.state.index + 3]}</p>

                <p className="secret-button" onClick={() => this.props.handler("end")}></p>
                </div>
            </div>
        )
    }
}