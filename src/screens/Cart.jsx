import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Cart = () => {
    return (
        <View style={styles.screen}>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})