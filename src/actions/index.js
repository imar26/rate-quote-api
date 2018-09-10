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

// export const incrementCount = (dispatch, storyId) => {
//     return (dispatch({type: constants.INCREMENT, id: storyId}))
// }

// export const decrementCount = (dispatch, storyId) => {
//     return (dispatch({type: constants.DECREMENT, id: storyId}))
// }