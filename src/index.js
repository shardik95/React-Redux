import React from 'react';
import ReactDOM from 'react-dom';

import {connect,Provider} from 'react-redux';
import {createStore} from 'redux';

const Counter = ({value =0,dispatch})=> (
    <div>
        <span>{value}</span>
        <button onClick={()=>{
            dispatch({type:'plus'})
        }}>+</button>
        <button onClick={()=>{
            dispatch({type:'minus'})
        }}>-</button>
    </div>
)

const  CounterReducer =(state ={
    value:0
},action) => {
    switch (action.type){
        case 'plus':
            return {
                value:++state.value
            }
        case 'minus':
            return {
                value:--state.value
            }
        default: return state
    }
}

const stateToPropertyMapper = (state) =>(
    {
        value:state.value
    }
)

const CounterApp = connect(stateToPropertyMapper)(Counter);

const store=createStore(CounterReducer);

ReactDOM.render(
    <Provider store={store}>
        <CounterApp/>
    </Provider>,
    document.getElementById('root')
)