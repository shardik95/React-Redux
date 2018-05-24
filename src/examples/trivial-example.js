import React from 'react';
import ReactDOM from 'react-dom';

import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';

const SomeComponent = ({SomeProperty,dispatch}) =>(
    <div>
        <button onClick={()=>{
            dispatch({type:'some action'})}
        }>Click</button>
        <h1>{SomeProperty}</h1>
    </div>
)

const SomeContainer = connect(stateToPropsMapper)(SomeComponent);

const someReducer = (state = {
                         someStateAttribute: 'some state action'},
                     action)=>{
    switch (action.type){
        case 'some action':
            return {
                someNewProperty:'some new state'
            }
        default: return state;
    }
}

function stateToPropsMapper(state){
    return {
        SomeProperty:state.someNewProperty
    }
}

const store = createStore(someReducer);

ReactDOM.render(
    <Provider store={store}>
        <SomeContainer/>
    </Provider>,
    document.getElementById('root')
)