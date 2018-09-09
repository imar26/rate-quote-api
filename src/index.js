import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import Containers
import App from './containers/App';

// Import Reducers
import rootReducer from './reducers/rootReducer';

// Import Mappers
import { mapStateToProps, mapDispatchToProps } from './mappers';

// For redux store
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

// For ENV Variables (API_KEY)
import dotenv from 'dotenv';
dotenv.config()

let store = createStore(rootReducer);

const Root = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root")
);