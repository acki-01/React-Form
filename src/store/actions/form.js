/** @format */

// /** @format */

import * as actionTypes from 'store/constans/actionTypes';

export const formSubmitSuccess = (userData) => {
    return {
        type: actionTypes.FORM_SUBMIT_SUCCESS,
        userData,
    };
};

export const formSubmitFail = (error) => {
    return {
        type: actionTypes.FORM_SUBMIT_FAIL,
        error,
    };
};

export const formSubmitStart = () => {
    return {
        type: actionTypes.FORM_SUBMIT_START,
    };
};

export const formSubmit = (userData) => {
    return {
        type: actionTypes.FORM_SUBMIT,
        userData,
    };
};
