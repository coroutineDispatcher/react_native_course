import React from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProcutItemComponent from '../../components/shop/ProductItemComponent';
import * as cardActions from '../../store/actions/card-action';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors'

const ProductOverviewScreens = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch()

    const selectItemHandler = (id, title) => {
        props.navigation.navigate({
            routeName: 'ProductDetail', params: {
                productId: id,
                productTitle: title
            }
        })
    }

    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData =>
            <ProcutItemComponent
                imageUrl={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => selectItemHandler(itemData.item.id, itemData.item.title)}>
                <Button color={Colors.primary} title="View Details" onPress={() => selectItemHandler(itemData.item.id, itemData.item.title)} />
                <Button color={Colors.primary} title="To card" onPress={() => dispatch(cardActions.addToCard(itemData.item))} />
            </ProcutItemComponent>}
    />;
};

ProductOverviewScreens.navigationOptions = (navData) => {
    return {
        headerTitle: 'All products',
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