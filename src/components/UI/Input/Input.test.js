/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('Input component', () => {
    it('should have proper values', () => {
        const validation = {
            required: true,
            minLength: 2,
        };
        const wrapper = shallow(
            <Input
                elementType="input"
                validationInfo="Required, minimum 2 characters"
                valid={false}
                touched={true}
                shouldValidate={true}
                value="a"
                validation={validation}
            />,
        );
        expect(wrapper.find('p').text()).toBe('Required, minimum 2 characters');
    });
    it('should render correctly', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper).toMatchSnapshot();
    });
});
