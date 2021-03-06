import Product from "../../model/product"

export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

export const deleteProduct = productId => {
    return { type: DELETE_PRODUCT, productId: productId }
};

export const createProduct = (title, description, imageUrl, price) => {
    return {
        type: CREATE_PRODUCT,
        productData: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price
        }
    }
}

export const updateProduct = (productId, title, description, imageUrl) => {
    return {
        type: UPDATE_PRODUCT,
        productId: productId,
        productData: {
            title: title,
            description: description,
            imageUrl: imageUrl
        }
    }
}