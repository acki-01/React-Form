/** @format */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Form from './Form';
import Input from '../../components/UI';

configure({ adapter: new Adapter() });

const initialState = {};

const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Form store={store} />);
});

describe('Form Component', () => {
    it('renders the Form wrapper', () => {
        wrapper.setState({
            form: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your name',
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 2,
                    },
                    validationInfo: 'Required, minimum 2 characters',
                    valid: false,
                    touched: false,
                },
                surname: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your surname',
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 2,
                    },
                    validationInfo: 'Required, minimum 2 characters',
                    valid: false,
                    touched: false,
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your e-mail',
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true,
                    },
                    validationInfo: 'Required, must be email format',
                    valid: false,
                    touched: false,
                },
                date: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',
                    },
                    value: '',
                    validation: {
                        required: true,
                    },
                    validationInfo: 'Required',
                    valid: false,
                    touched: false,
                },
            },
            formIsValid: false,
            loading: false,
        });
        expect(wrapper.find(Input)).toHaveLength(4);
    });
    it('should be defined', () => {
        expect(Form).toBeDefined();
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
