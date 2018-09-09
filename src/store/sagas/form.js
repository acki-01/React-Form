/** @format */

import { put } from 'redux-saga/effects';

import axios from 'services/axios-form';
import * as actions from 'store/actions';

export function* formSubmitSaga(action) {
    yield put(actions.formSubmitStart());
    try {
        const response = yield axios.post('/attandees', action.userData);
        yield put(actions.formSubmitSuccess(response));
    } catch (error) {
        yield put(actions.formSubmitFail(error));
    }
}
