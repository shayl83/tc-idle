//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import { mount, shallow } from 'enzyme';
import RatCage from './../RatCage';
import RatButton from '../../ux/RatButton'

describe('RatCage', () => {
    let wrapper, onClickStub;
    beforeEach(() => {
        onClickStub = jest.fn();
        // wrapper = mount(<RatCage startupRats={0} />);
        // spy =  jest.spyOn(RatCage.prototype, 'addRats').mockImplementation(() => true);
        wrapper = mount(<RatCage startupRats={0} />);
    });
    it ('renders with the rat wrapper class', ()=> {
        expect(wrapper.find('.metric-rat-cage-wrapper').length).toBe(1);
    });
    it ('should call onclick when button is clicked', ()=> {
        const button = wrapper.find('button.metric-btn-ratCage-cloneRats');

        console.log(button.debug());
        button.simulate('click');
        expect(onClickStub).toBeCalled();
    })
});