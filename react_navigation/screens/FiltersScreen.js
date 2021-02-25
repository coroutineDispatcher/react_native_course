import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/colors'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primary }}
                value={props.value}
                onValueChange={props.onValueChange} />
        </View>
    )
}

const FiltersScreen = props => {
    const { navigation } = props
    const [isGluteenFree, setIsGluteenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const savedFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGluteenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        console.log(appliedFilters)
    }, [isGluteenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({ savedKey: savedFilters })
    }, [savedFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters/restrictions:</Text>
            <FilterSwitch label='Gluten-free' value={isGluteenFree} onValueChange={newValue => setIsGluteenFree(newValue)} />
            <FilterSwitch label='Lactose-free' value={isLactoseFree} onValueChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label='Vegan' value={isVegan} onValueChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label='Vegetarian' value={isVegetarian} onValueChange={newValue => setIsVegetarian(newValue)} />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter meals',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }}></Item>
        </HeaderButtons>),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item iconName='ios-save' onPress={() => {
                    navData.navigation.getParam('savedKey')();
                }}></Item>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FiltersScreen