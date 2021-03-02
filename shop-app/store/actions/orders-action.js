export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cardItems, totalAmmount) => {
    return {
        type: ADD_ORDER,
        orderData: {
            items: cardItems,
            ammount: totalAmmount
        }
    };
}