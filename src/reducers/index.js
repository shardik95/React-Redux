import {MINUS, PLUS} from "../Constants";

export const CounterReducer = (state = {
    value:0
},action)=>{
    switch (action.type){

        case PLUS:return {
            value:++state.value
        }

        case MINUS:return {
            value:--state.value
        }


        default: return state;
    }
}