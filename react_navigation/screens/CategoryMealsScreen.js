import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy_data'
import Colors from '../constants/colors'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }}
        />
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '95%' }}
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    return {
        headerTitle: selectedCategory.title
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

export default CategoryMealScreen