//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import {mount, shallow} from 'enzyme';
import Rats from './../Rats';

const MOCK_STARTUP_RATS = 0;

describe('Rats', () => {
    let wrapper;
    it('Rats renders without crashing', () => {
        wrapper = shallow(<Rats propRats={MOCK_STARTUP_RATS} />);
    })
});