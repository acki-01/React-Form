/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });

describe('Button component', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should be disabled', () => {
        const props = { disabled: true };
        const wrapper = shallow(<Button props={props} />);
        expect(
            wrapper.find('button').filterWhere((item) => {
                return item.disabled === true;
            }),
        );
    });

    it('should invoke method on click', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(<Button clicked={clickHandler} />);
        wrapper.find('button').simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});
