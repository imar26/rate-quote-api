// Import Actions
import * as actions from '../actions';

export const mapDispatchToProps = (dispatch) => {
    return {
        setRequestId: (requestId) => actions.setRequestId(dispatch, requestId),
        displayMessage: (message) => actions.displayMessage(dispatch, message),
        hideMessage: () => actions.hideMessage(dispatch)
    }
}

export const mapStateToProps = (state) => {
    return {
        requestId: state.requestId,
        error: state.error,
        errorMessage: state.errorMessage,
        quotes: state.quotes,
        loading: state.loading
    }
}