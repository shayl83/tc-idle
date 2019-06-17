import * as React from "react";
const {Component} = React;

interface RatsComponentProps {
    propRats: number
}

interface RatsComponentState {
    // numRats: number
}

class Rats extends Component<RatsComponentProps, RatsComponentState> {
    // state: RatsComponentState = {
    //     numRats: 1
    // };
    // changeStatus = () => {
    //     this.setState({
    //         numRats: this.state.numRats++
    //     });
    // };

    render(){
        // const { currRats} = this.props;
        const { propRats } = this.props;
        return(
            <div>
                {propRats}
            </div>
        )
    }
}

export default Rats;