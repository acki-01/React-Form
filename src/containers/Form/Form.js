/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from 'containers/Form/Form.css';
import { Input, Button } from 'components/UI';
import axios from 'services/axios-form';
import { withLoading, withErrorHandler } from 'hoc';
import * as actions from 'store/actions';
import { updateObject } from 'shared/utility';
import { checkValidity } from 'shared/validation';

class Form extends Component {
    state = {
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
    };

    formHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[
                formElementIdentifier
            ].value;
        }
        this.props.onSubmitForm(formData);
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(
            this.state.form[inputIdentifier],
            {
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    this.state.form[inputIdentifier].validation,
                ),
                touched: true,
            },
        );
        const updatedForm = updateObject(this.state.form, {
            [inputIdentifier]: updatedFormElement,
        });
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ form: updatedForm, formIsValid });
    };
    render() {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key],
            });
        }
        let form = (
            <form onSubmit={this.formHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        key={formElement.id}
                        value={formElement.config.value}
                        changed={(event) =>
                            this.inputChangedHandler(event, formElement.id)
                        }
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        validationInfo={formElement.config.validationInfo}
                        touched={formElement.config.touched}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>
                    SUBMIT
                </Button>
            </form>
        );
        return (
            <div className={classes.Form}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm: (formData) => dispatch(actions.formSubmit(formData)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withErrorHandler(withLoading(Form), axios));
