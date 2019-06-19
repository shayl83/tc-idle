/* eslint-disable import/first */

import * as React from "react";
import RatButton from '../ux/RatButton';
import Rats from '../common/Rats';

interface RatCageProps {
    name?: string,
    startupRats: number
    // username: string,
    // age: number
    // count:
}

const InitialState = {
    rats: 0
};

type RatCageState = typeof InitialState

class RatCage extends React.Component<RatCageProps, RatCageState> {
    public readonly state = InitialState;
    
    //you had to use this kind of function because your onClick function inside the button is set to the wrong type
    //it needs to be setup to be a react.mousevent function type
    addRats = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {rats: prevState.rats + 1}
        });
        console.log('add rats clicked');
    };
    render(){
        const { startupRats } = this.props;
        // const { } = this.state;
        return(
            <div className={'metric-rat-cage-wrapper'}>
                <div>
                    You have {startupRats} rats.
                </div>
                <RatButton className={'metric-btn-ratCage-cloneRats'} onClick={this.addRats}>Clone Rats</RatButton>
                <Rats propRats={startupRats+this.state.rats} />
            </div>
        )
    }
}

export default RatCage;
