import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, drawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CardScreen from '../screens/shop/CardScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProducScreen';
import EditProductScreen from '../screens/user/EditProductScreen'

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: Colors.primary
    }
}

const productsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Card: CardScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name='ios-list' size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavigationOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name='ios-card' size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavigationOptions
});

const AdminsNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name='ios-woman' size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavigationOptions
});


const ShopNavigator = createDrawerNavigator({
    Products: productsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminsNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator);