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
        // Show success message on adding story to the list
        // case constants.HIDE_MESSAGE:
        //     return {stories: state.stories, success: false}
        default:
            return state;
    }
}

// Export RootReducer
export default rootReducer;