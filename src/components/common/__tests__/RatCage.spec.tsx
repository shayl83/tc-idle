//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import {mount} from 'enzyme';
import { shallow } from 'enzyme';
import RatCage from './../RatCage';



describe('RatCage', () => {
    let wrapper;
    it ('renders without crashing', ()=> {
        wrapper = shallow(<RatCage startupRats={1} />);
    })
});