/* eslint-disable import/first */

import * as React from "react";
import RatButton from '../ux/RatButton';
import Rats from '../common/Rats';

interface RatCageProps {
    name?: string,
    startupRats: number
}

const InitialState = {
    rats: 0
};

type RatCageState = typeof InitialState

class RatCage extends React.Component<RatCageProps, RatCageState> {
    public readonly state = InitialState;
    public timer: any;
    addRats = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {rats: prevState.rats + 1}
        });
    };
    //fat arrows here for scoping
    initAutoRats = () => {
        //this can be run multiple times so need to fix that
        this.setState(prevState => {
            return {rats: prevState.rats + 1}
        });
    };
    startTimer = () =>{
        window.setInterval(()=>this.initAutoRats(), 500);
    };
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render(){
        const { startupRats } = this.props;
        return(
            <div className={'metric-rat-cage-wrapper'}>
                <div>
                    You started with {startupRats} rats.
                </div>
                <RatButton className={'metric-btn-ratCage-cloneRats'} onClick={this.addRats}>Clone Rats</RatButton>
                <RatButton onClick={this.startTimer}>
                    Start auto rats
                </RatButton>
                Current Rats: <Rats propRats={startupRats+this.state.rats} />
            </div>
        )
    }
}

export default RatCage;
