import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItemComponent from '../../components/shop/ProductItemComponent';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/products-action';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id })
    }

    return (
        <FlatList data={userProducts} keyExtractor={item => item.id} renderItem={itemData =>
            <ProductItemComponent
                imageUrl={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => { }}>
                <Button color={Colors.primary} title="Edit" onPress={() => editProductHandler(itemData.item.id)} />
                <Button color={Colors.primary} title="Delete" onPress={() => dispatch(productActions.deleteProduct(itemData.item.id))} />
            </ProductItemComponent>
        } />
    )
};

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'My Products',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title='Add'
                    iconName='ios-create'
                    onPress={() => navData.navigation.navigate('EditProduct')}
                />
            </HeaderButtons>
        )
    }
}

export default UserProductsScreen;