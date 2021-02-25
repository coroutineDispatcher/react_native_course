import React from 'react'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.content}>
                <Text>No favorite meals found. Start adding some</Text>
            </View>
        )
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})

export default FavoritesScreen