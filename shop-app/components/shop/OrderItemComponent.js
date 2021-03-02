import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CardItem from '../shop/CardItemComponent';
import Colors from '../../constants/Colors'

const OrderItemConstant = props => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmmount}>${props.ammount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button color={Colors.primary} title={showDetails ? 'Hide Details' : 'Show Details'} onPress={() =>
                setShowDetails(prevState => !prevState)
            } />
            {showDetails &&
                <View style={styles.detailItems}>
                    {props.items.map(cardItem =>
                        <CardItem
                            key={cardItem.productId}
                            quantity={cardItem.quantity}
                            ammount={cardItem.sum}
                            title={cardItem.productTitle}
                        />)}
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmmount: {
        fontSize: 15,
    },
    date: {
        fontSize: 16,
        color: '#888'
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItemConstant;