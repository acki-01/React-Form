/** @format */

import React from 'react';

import classes from 'components/UI/Input/Input.css';

const input = (props) => {
    const inputClasses = [classes.InputElement];
    let validationInfo = '';
    if (props.shouldValidate && props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
        validationInfo = props.validationInfo;
    }
    let inpulElement = null;
    switch (props.elementType) {
        case 'input':
            inpulElement = (
                <React.Fragment>
                    <input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                    />
                    <p className={classes.ValidationInfo}>{validationInfo}</p>
                </React.Fragment>
            );
            break;
        default:
            inpulElement = (
                <React.Fragment>
                    <input
                        className={classes.InputElement}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                    />
                    <p>{props.validationInfo}</p>
                </React.Fragment>
            );
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inpulElement}
        </div>
    );
};

export default input;
