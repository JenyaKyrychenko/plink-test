import {ADD_PRODUCT} from "./actions";

const defaultState = [
    {id: 1, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
    {id: 2, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
    {id: 3, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
    {id: 4, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
    {id: 5, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
]

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, [action.payload.id]: {...action.payload.product}}
        default:
            return state
    }
}

export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
