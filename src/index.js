import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './componenets/App';

const store = createStore(reducers)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
