import React from "react";

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicks : 0,
            totalRemainingClicks : 10
        }
    }

    clickMe() {
        if (this.state.totalRemainingClicks == 0) {
            return
        }
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemainingClicks: this.state.totalRemainingClicks - 1
        })
    }

    render() {
        return (
            <div>
                <h2 onClick={() => this.clickMe()}>Hello. I am {this.props.name}</h2>
                <div>Clicks: {this.state.clicks}, Total remaining clicks: {this.state.totalRemainingClicks}</div>
            </div>
        )
    }
}

export default Item;