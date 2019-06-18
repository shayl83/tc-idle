//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import {mount, shallow} from 'enzyme';
import RatButton from '../RatButton';

describe('RatButton', () => {
    let wrapper;
    it('RatButton renders without crashing', () => {
        wrapper = shallow(<RatButton>Test</RatButton>);
    })
});