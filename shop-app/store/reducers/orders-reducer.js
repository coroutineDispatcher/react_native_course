import Order from '../../model/order';
import { ADD_ORDER } from '../actions/orders-action'

const initialState = {
    orders: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), action.orderData.items, action.orderData.ammount, new Date());
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }
    return state;
}