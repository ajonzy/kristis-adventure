import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            output: [
                "Using your handy dandy magnifying glass you start inspecting all the moss for shadows. 'Here Shadow, Shadow, Shadow... There's a nice shadow... come here..' suddenly you notice something in your magnifying glass!!", "'BEEEEE!!!!! BEEEE BEEEEE BEEEEE BEEEE!!!!' You scream while running around in circles. Your sister, curious as to what the heck you are doing making all that noise, joins you outside. 'Hi friend! Whatcha doin- BEEE! BEEEEE BEEEE BEEE!!!!' She starts running the opposite way. You both conk heads and crash into a heap. The bee was rather offended that you made such a fuss and she humphed at you when she left. Groaning you push your sister off and resume your shadow hunt.", "'Here Shadow, Shadow, Shadow...' Suddenly you notice something else in your magnifying glass. What color is it?"
            ],
            buttonOutput: [":o", "-_-", "Slightly Yellow"],
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
            <div className="north">
                <p className="output">{this.state.output[this.state.index]}</p>
                <div className="buttons">
                <p className="button" onClick={this.state.index < 2 ? this.handleOutputChange : () => props.handler("end")}>{this.state.buttonOutput[this.state.index]}</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>A bit yellow</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>Yellow</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>A bit more than yellow</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>Very Yellow</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>Extremely Yellow</p>
                <p className="button" style={{display: this.state.index < 2 ? "none" : "flex"}} onClick={() => props.handler("end")}>Is that, yellow and black? (Gulp.)</p>

                <p className="secret-button" onClick={() => props.handler("end")}></p>
                </div>
            </div>
        )
    }
}