import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

const SomeComponent = ({SomeComponentProperty,dispatch})=>(
    <div>
        <button onClick={()=>{
            dispatch({type:'some action'})}}>
            Click
        </button>
        <h1>{SomeComponentProperty}</h1>
    </div>
)

function someStateToPropsMapper(state){
    return {
        SomeComponentProperty:state.someStateAttribute
    }
}

const SomeContainer = connect(someStateToPropsMapper)(SomeComponent);

const someReducer = (state = {
    someDefaultProperty:'some state'},
                     action)=>{
    switch(action.type){
        case 'some action':
            alert("some action")
            return {
                someStateAttribute: 'some new State'
            }
        default:return state
    }
}

const store=createStore(someReducer);

ReactDOM.render(
    <Provider store={store}>
        <SomeContainer/>
    </Provider>,
    document.getElementById('root')
)