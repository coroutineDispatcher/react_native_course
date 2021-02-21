import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import Colors from '../constants/colors'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({ routeName: 'CategoriesMeals', params: { categoryId: itemData.item.id} })
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen