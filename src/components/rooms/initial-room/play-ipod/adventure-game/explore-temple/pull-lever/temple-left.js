import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            output: [
                "Weren't you always taught to choose the right?! Well you you chose wrong! As you walk to the left the floor suddenly falls out below you... Everything fades to black", "Oh wow, ok, but just see if I let you get away with that again... Back to the temple entrance you go!"
            ],
            buttonOutput: ["Ummm, I have a one-up mushroom?", "*munches mushroom*"],
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
            <div className="temple-left">
                <p className="output">{this.state.output[this.state.index]}</p>
                <div className="buttons">
                <p className="button" onClick={this.state.index == 0 ? this.handleOutputChange : () => this.props.handler("explore-temple")}>{this.state.buttonOutput[this.state.index]}</p>
                <p className="secret-button" onClick={() => props.handler("end")}></p>
                </div>
            </div>
        )
    }
}