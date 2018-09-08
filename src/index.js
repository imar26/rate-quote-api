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

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(rootReducer);

const Root = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root")
);