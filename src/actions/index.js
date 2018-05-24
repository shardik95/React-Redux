import {MINUS, PLUS} from "../Constants";

export const plus = dispatch => (
    dispatch({type: PLUS})
)

export const minus = dispatch => (
    dispatch({type: MINUS})
)