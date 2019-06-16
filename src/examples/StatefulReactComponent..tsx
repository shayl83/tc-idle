import * as React from "react";
const {Component} = React;

interface StatefulReactComponentProps {
    name: string,
    username: string,
    age: number
}

interface StatefulReactComponentState {
    publicStatus: boolean;
}

class StatefulReactComponent extends Component<StatefulReactComponentProps, StatefulReactComponentState> {
    state: StatefulReactComponentState = {
        publicStatus: false
    };

    changeStatus = () => {
        this.setState({
            publicStatus: (!this.state.publicStatus)
        });
    };

    render(){
        const { name, username, age} = this.props;
        const { publicStatus } = this.state;
        return(
            <div>

                { publicStatus ? (
                    <h1>This Profile is Public</h1>
                ) : (
                    <h1>This Profile is Private</h1>
                )}

                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Age: {age}</p>
                <button onClick={this.changeStatus}>Set Status</button>
            </div>
        )
    }
}

export default StatefulReactComponent;