import {minus, plus} from "../actions";
import {Counter} from "../components";
import {connect} from 'react-redux';

const StateToPropertyMapper = (state) => {
    return {
        value:state.value
    }
}

const DispatchToPropertiesMapper = dispatch => ({
    plus : () => plus(dispatch),
    minus:()=> minus(dispatch)
})

export const CounterApp = connect(StateToPropertyMapper,
    DispatchToPropertiesMapper)(Counter)