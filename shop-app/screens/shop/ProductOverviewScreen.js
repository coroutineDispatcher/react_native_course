import React from 'react';
import { FlatList, StyleSheet, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProcutItemComponent from '../../components/shop/ProductItemComponent';
import * as cardActions from '../../store/actions/card-action';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton'

const ProductOverviewScreens = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch()

    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProcutItemComponent
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() =>
                props.navigation.navigate({
                    routeName: 'ProductDetail', params: {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    }
                })
            }
            onAddToCard={() => dispatch(cardActions.addToCard(itemData.item))}
        />}
    />;
};

ProductOverviewScreens.navigationOptions = (navData) => {
    return {
        headerTitle: 'All products',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title='Card'
                    iconName='ios-cart'
                    onPress={() => { navData.navigation.navigate({ routeName: 'Card' }) }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({});

export default ProductOverviewScreens;