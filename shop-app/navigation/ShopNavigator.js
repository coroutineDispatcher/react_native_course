import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CardScreen from '../screens/shop/CardScreen'

const productsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Card: CardScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: Colors.primary
    }
});

export default createAppContainer(productsNavigator);