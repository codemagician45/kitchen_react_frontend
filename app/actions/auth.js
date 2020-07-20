/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable no-undef */

import * as actionTypes from './actionConstants';
import config from './config';

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error
});

export const authStart = () => ({
    type: actionTypes.AUTH_START
});

export const authSuccess = user => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user
    };
};

export const authLogin = (username, password) => dispatch => {
    console.log('try');
 };
