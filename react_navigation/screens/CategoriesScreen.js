import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import Colors from '../constants/colors'
import CategoryGridTileComponent from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTileComponent style={styles.gridItem} title={itemData.item.title} onItemSelected={() =>
            props.navigation.navigate({ routeName: 'CategoriesMeals', params: { categoryId: itemData.item.id } })
        } 
        color={itemData.item.color}
        />
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
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