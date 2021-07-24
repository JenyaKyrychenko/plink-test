import {ADD_PRODUCT, FILTER_PRODUCTS} from "./actions";

const defaultState = [
    {id: 1, name: 'Lenovo IC-512', sku: 'ZC11501', ram: 4, hdd: 512, price: 550},
    {id: 2, name: 'HP Megabook 14', sku: 'ZC12001', ram: 2, hdd: 240, price: 420},
    {id: 3, name: 'Lenovo IC-520', sku: 'ZC22004', ram: 8, hdd: 1024, price: 600},
    {id: 4, name: 'Asus ThinkPad 15-1554', sku: 'ZC15030', ram: 16, hdd: 1024, price: 700},
    {id: 5, name: 'Asus ThinkPad 14-254', sku: 'ZC5467', ram: 8, hdd: 240, price: 520},
    {id: 6, name: 'HP Elitebook 15', sku: 'ZC5460', ram: 12, hdd: 515, price: 889},
]

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

