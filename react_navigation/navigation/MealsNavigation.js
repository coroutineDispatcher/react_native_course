import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
import Colors from '../constants/colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        }, 
        headerBackTitle: 'Back',
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
}

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
    defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInformation.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons name='ios-star' size={25} color={tabInformation.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)
