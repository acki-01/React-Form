/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';

configure({ adapter: new Adapter() });

describe('<Backdrop />', () => {
    it('should not be rendered', () => {
        const wrapper = shallow(<Backdrop show={false} />);
        expect(wrapper.find('div')).toHaveLength(0);
    });
    it('should render correctly', () => {
        const wrapper = shallow(<Backdrop />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should invoke method on click', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(
            <Backdrop clicked={clickHandler} show={true} />,
        );
        wrapper.find('div').simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});
