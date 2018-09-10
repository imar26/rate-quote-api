// Import Constants
import * as constants from '../constants';

const rootReducer = (state = {
    requestId: '',
    error: false,
    errorMessage: '',
    quotes: [],
    loading: false
}, action) => {
    switch (action.type) {
        // Set Request Id
        case constants.SET_REQUEST_ID:
            return {
                requestId: action.requestId
            }
        // Display Error Message
        case constants.DISPLAY_MESSAGE:
            return {
                error: true,
                errorMessage: action.errorMessage
            }
        // Hide Error Message
        case constants.HIDE_MESSAGE:
            return {
                error: false,
                errorMessage: ''
            }
        // Enable Loader
        case constants.ENABLE_LOADING:
            return {
                loading: true
            }
        // Set Quotes and disable loader
        case constants.SET_QUOTES:
            return {
                loading: false,
                quotes: action.quotes
            }
        default:
            return state;
    }
}

// Export RootReducer
export default rootReducer;