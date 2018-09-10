// Import Constants
import * as constants from '../constants';

export const setRequestId = (dispatch, requestId) => {
    return (dispatch({type: constants.SET_REQUEST_ID, requestId: requestId}))
}

export const displayMessage = (dispatch, message) => {
    return (dispatch({type: constants.DISPLAY_MESSAGE, errorMessage: message}))
}

export const hideMessage = (dispatch) => {
    return (dispatch({type: constants.HIDE_MESSAGE}))
}

export const enableLoading = (dispatch) => {
    return (dispatch({type: constants.ENABLE_LOADING}))
}

export const setQuotes = (dispatch, quotes) => {
    return (dispatch({type: constants.SET_QUOTES, quotes: quotes}))
}