import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
import Colors from '../constants/colors'
import FavoritesScreen from '../screens/FavoritesScreen'

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

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
})

export default createAppContainer(MealsFavTabNavigator)
