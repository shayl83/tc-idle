//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import { shallow } from 'enzyme';
import App from './../App';

describe('RatCage', () => {
    let wrapper;
    it ('renders without crashing', ()=> {
        wrapper = shallow(<App />);
    })
});