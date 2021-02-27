import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CardItemComponent from '../../components/shop/CardItemComponent'
import * as cardActions from '../../store/actions/card-action'

const CardScreen = props => {
    const cardTotalAmmount = useSelector(state => state.card.totalAmmount)
    const cardItems = useSelector(state => {
        const transformedCardItems = []
        for (const key in state.card.items) {
            transformedCardItems.push({
                productId: key,
                productTitle: state.card.items[key].productTitle,
                productPrice: state.card.items[key].productPrice,
                quantity: state.card.items[key].quantity,
                sum: state.card.items[key].sum,
            })
        }
        return transformedCardItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });

    const dispatch = useDispatch()
    return (
        <View style={styles.screenHolder}>
            <View style={styles.screen}>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>Total: <Text style={styles.ammountText}>${cardTotalAmmount.toFixed(2)}</Text></Text>
                    <Button color={Colors.accent} title='Order now' disabled={cardItems.length === 0} />
                </View>
                <FlatList data={cardItems} keyExtractor={item => item.productId} renderItem={itemData =>
                    <CardItemComponent
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        ammount={itemData.item.sum}
                        onRemove={() => dispatch(cardActions.removeFromCard(itemData.item.productId))}
                    />
                }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenHolder: {
        backgroundColor: 'white'
    },
    screen: {
        margin: 20,
        backgroundColor: 'white'
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontSize: 18,
    },
    ammountText: {
        color: Colors.accent
    }
})

export default CardScreen;