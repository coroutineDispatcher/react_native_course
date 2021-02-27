import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import Colors from '../constants/Colors'

const productsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(productsNavigator);