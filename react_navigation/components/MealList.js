import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem'
import { useSelector } from 'react-redux'

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id)
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
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFavorite: isFavorite
                    }
                })
            }}
        />
    }

    return (
        <View style={styles.list}>
            <FlatList
                style={{ width: '95%' }}
                data={props.listData}
                renderItem={renderMealItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})

export default MealList