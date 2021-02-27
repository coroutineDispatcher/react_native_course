import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cardActions from '../../store/actions/card-action';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(product => product.id === productId));
    const dispatch = useDispatch()

    return (
        <ScrollView style={styles.mainContainer}>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actions}>
                <Button title="AddToCard" onPress={() => 
                    dispatch(cardActions.addToCard(selectedProduct))
                } color={Colors.primary} />
            </View>
            <Text style={styles.price}>{selectedProduct.price}$</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center'
    },
    mainContainer: {
        backgroundColor: 'white'
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    }
})

export default ProductDetailsScreen;