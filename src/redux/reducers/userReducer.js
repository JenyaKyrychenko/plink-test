import {ADD_USER, ADD_USER_INFO} from "./actions";

const defaultState = {
    name: '',
    email: '',
    country: '',
    city: '',
    address: ''
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER_INFO:
            return {...action.payload}
        default:
            return state
    }
}

export const addUserAction = (payload) => ({type: ADD_USER_INFO, payload})
