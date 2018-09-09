/** @format */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withErrorHandler from './withErrorHandler';

configure({ adapter: new Adapter() });

describe('withErrorHandler Component', () => {
    it('should be defined', () => {
        expect(withErrorHandler).toBeDefined();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<withErrorHandler />);
        expect(wrapper).toMatchSnapshot();
    });
});
