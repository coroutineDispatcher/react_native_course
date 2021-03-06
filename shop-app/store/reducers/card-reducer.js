import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actions/card-action";
import { ADD_ORDER } from '../actions/orders-action';

import Card from '../../model/card'
import CardItem from "../../model/card";
import { DELETE_PRODUCT } from "../actions/products-action";

const initialState = {
    items: {},
    totalAmmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let updatedOrNewCardItem;

            if (state.items[addedProduct.id]) {
                updatedOrNewCardItem = new Card(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
            } else {
                updatedOrNewCardItem = new Card(1, productPrice, productTitle, productPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCardItem },
                totalAmmount: state.totalAmmount + productPrice
            }
        case REMOVE_FROM_CARD:
            const selectedCardItem = state.items[action.productId]
            const currentQuantity = state.items[action.productId].quantity;
            let updatedCardItems;
            if (currentQuantity > 1) {
                const updatedCardItem = new CardItem(
                    selectedCardItem.quantity - 1,
                    selectedCardItem.productPrice,
                    selectedCardItem.productTitle,
                    selectedCardItem.sum - selectedCardItem.productPrice
                );
                updatedCardItems = { ...state.items, [action.productId]: updatedCardItem }
            } else {
                updatedCardItems = { ...state.items }
                delete updatedCardItems[action.productId]
            }
            return {
                ...state,
                items: updatedCardItems,
                totalAmmount: state.totalAmmount - selectedCardItem.productPrice
            }
        case ADD_ORDER:
            return initialState;
        case DELETE_PRODUCT:
            if (!state.items[action.productId]) { return state }
            const updatedItems = { ...state.items };
            const itemTotal = state.items[action.productId].sum;
            delete updatedItems[action.productId]
            return {
                ...state,
                items: updatedItems,
                totalAmmount: state.totalAmmount - itemTotal
            }
    }
    return state;
}
