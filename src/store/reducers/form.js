/** @format */

import * as actionTypes from 'store/constans/actionTypes';
import { updateObject } from 'shared/utility';

const initialState = {
    loading: false,
    submitted: false,
};

const formSubmit = (state) => {
    return updateObject(state, {
        submitted: false,
    });
};

const formSubmitStart = (state) => {
    return updateObject(state, {
        loading: true,
    });
};

const formSubmitSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        submitted: true,
    });
};

const formSubmitFail = (state) => {
    return updateObject(state, {
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORM_SUBMIT:
            return formSubmit(state);
        case actionTypes.FORM_SUBMIT_START:
            return formSubmitStart(state);
        case actionTypes.FORM_SUBMIT_SUCCESS:
            return formSubmitSuccess(state, action);
        case actionTypes.FORM_SUBMIT_FAIL:
            return formSubmitFail(state);
        default:
            return state;
    }
};

export default reducer;
