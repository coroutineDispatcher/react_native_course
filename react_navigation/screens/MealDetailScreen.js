import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy_data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>Selected meal: {selectedMeal.title}</Text>
            <Button title='Go back to categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName='ios-star-outline' onPress={() => {
                console.log('Mark as favorite')
            }} />
        </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})

export default MealDetailScreen