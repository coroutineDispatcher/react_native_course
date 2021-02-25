import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'
import { useCallback } from 'react/cjs/react.development'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedMeal.id))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFavorite: currentMealIsFavorite })
    }, [currentMealIsFavorite])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isMealFavorite = navigationData.navigation.getParam('isFavorite')

    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isMealFavorite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite} />
        </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen