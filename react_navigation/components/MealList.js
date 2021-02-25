import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem'

const MealList = props => {
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