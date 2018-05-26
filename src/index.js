import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {CounterReducer} from "./reducers";
import {CounterApp} from "./containers/CounterApp";

const store =createStore(CounterReducer);

ReactDOM.render(
    <Provider store={store}>
        <CounterApp/>
    </Provider>,
    document.getElementById('root')
)