/* eslint-disable import/first */

import * as React from "react";
const {Component} = React;
import { Button } from '../../components/ux/Button';
import Rats from '../common/Rats';

interface RatCageProps {
    name?: string,
    startupRats: number
    // username: string,
    // age: number
    // count:
}

interface RatCageState {
    // count: number
}

class RatCage extends Component<RatCageProps, RatCageState> {
    // state: RatCageState = {
    //     count: 1
    // };

    // changeStatus = () => {
    //     this.setState({
    //         publicStatus: (!this.state.publicStatus)
    //     });
    // };

    render(){
        const { startupRats } = this.props;
        // const { } = this.state;
        return(
            <div className={'metric-rat-cate-wrapper'}>
                <Button text='Clone Rat' onClick={()=>{}} />
                <Rats propRats={startupRats} />
            </div>
        )
    }
}

export default RatCage;