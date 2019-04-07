import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            output: ["A board or Card Game! yay! While you grabbed all the games suddenly there was a flash of lightening. BOOM! Went the Thunder! BOOM! Went the Lightening! BOOM! BOOM! BOOM!!!! The room starts spinning and it slowly fades to black.",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Hey, While we are waiting for you to wake up.)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(How are you doing?)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Yes, I know thats a silly question you are passed out after all.)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Or are you?)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Oh! By the way, where did that storm come from?).",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(I thought it started out as a sunny day.).",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Right?).",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(I mean, how else would you notice a shadow go across the window?).",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Oh right, I forgot you simply ignored it.)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(Well thats no fun.)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(What, you expected to get away scotch free? Just play games with your sister? Oh no, silly, silly you. We simply can't let this happen, now can we?)",".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .","(P.S. Here's some advice: Never trust the narrorator.)"],
            index: 0
        }

        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex() {
        this.setState({
            index: ++this.state.index
        })
    }
    render() {
        return (
            <div className="play-sister">
                <p className="output">{this.state.output[this.state.index]}</p>
                <div className="buttons">
                <p className="button" onClick={this.state.index < 24 ? this.updateIndex : () => this.props.handler("........")}>........</p>
                </div>
            </div>
        )
    }
}