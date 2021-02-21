import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
import Colors from '../constants/colors'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoriesMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: {
        screen: MealDetailsScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerBackTitle: 'Back'
    }
})

export default createAppContainer(MealsNavigator)
