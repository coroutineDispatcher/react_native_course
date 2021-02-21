import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The MealDetail screen!</Text>
            <Button title='Go back to categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
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