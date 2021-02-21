import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import Colors from '../constants/colors'

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    return (
        <View style={styles.screen}>
            <Text>The Categories meals screen!</Text>
            <Button title='Go to meal details' onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
            }} />
            <Button title='Go back' onPress={() => {
                props.navigation.goBack()
            }} />
        </View>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
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