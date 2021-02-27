import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProcutItemComponent from '../../components/shop/ProductItemComponent'

const ProductOverviewScreens = props => {
    const products = useSelector(state => state.products.availableProducts);
    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProcutItemComponent
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => { }}
            onAddToCard={() => { }}
        />}
    />;
};

ProductOverviewScreens.navigationOptions = {
    headerTitle: 'All products'
}

const styles = StyleSheet.create({});

export default ProductOverviewScreens;