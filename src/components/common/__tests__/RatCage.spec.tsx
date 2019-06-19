//Test created by stacey.garrison on 6/17/2019

import * as React from "react";
import { mount, shallow } from 'enzyme';
import RatCage from './../RatCage';
import RatButton from '../../ux/RatButton'
import {ReactNode} from "react";

describe('RatCage', () => {
    let wrapper: any, onClickStub, spy;
    beforeEach(() => {
        wrapper = mount(<RatCage startupRats={0} />);
    });
    it ('renders with the rat wrapper class', ()=> {
        expect(wrapper.find('.metric-rat-cage-wrapper').length).toBe(1);
    });
    it ('state of rats should increase when addRats is called', ()=> {
        const wrapper = shallow(<RatCage startupRats={0} />);
        const instance = wrapper.instance() as RatCage;
        // const params = MouseEvent<HTMLButtonElement>;
        const prevState = instance.state.rats;
        instance.addRats();
        expect(instance.state.rats).toBeGreaterThan(prevState);

        // instance.handleClick(params, false);
        // expect(instance.selectedItems.has('test')).toBeFalsy();
    })
});