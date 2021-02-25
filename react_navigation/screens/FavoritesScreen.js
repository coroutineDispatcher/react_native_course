import React from 'react'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy_data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {
    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={favoriteMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }}></Item>
        </HeaderButtons>
        
    }
}

export default FavoritesScreen