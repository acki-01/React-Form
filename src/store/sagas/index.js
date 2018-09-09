/** @format */

// /** @format */

import { takeEvery } from 'redux-saga/effects';

import { formSubmitSaga } from 'store/sagas/form';
import * as actionTypes from 'store/constans/actionTypes';

export function* watchForm() {
    yield takeEvery(actionTypes.FORM_SUBMIT, formSubmitSaga);
}
