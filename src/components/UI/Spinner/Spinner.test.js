/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('Spinner component', () => {
    it('should be defined', () => {
        expect(Spinner).toBeDefined();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain div', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
