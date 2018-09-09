/** @format */

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
    it('should contain <Backdrop /> and div', () => {
        const props = { show: true };
        const wrapper = mount(<Modal props={props} />);
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });

    it('should render correctly', () => {
        const wrapper = mount(<Modal />);
        expect(wrapper).toMatchSnapshot();
    });
});
