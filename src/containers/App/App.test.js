/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

import Form from '../Form/Form';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    it('should renders the Form wrapper', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Form)).toHaveLength(1);
    });
    it('should be defined', () => {
        expect(App).toBeDefined();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
