import React from 'react'
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/dummy_data'
import MealList from '../components/MealList'
import { View, Text, StyleSheet } from 'react-native'

const CategoryMealScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const categoryId = props.navigation.getParam('categoryId')

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.emptyCategoryContent}>
                <Text>No meals found. Maybe check your filters</Text>
            </View>
        )
    }

    return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    emptyCategoryContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})

export default CategoryMealScreen