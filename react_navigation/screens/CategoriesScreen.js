import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import CategoryGridTileComponent from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

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

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }}></Item>
        </HeaderButtons>
    }
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