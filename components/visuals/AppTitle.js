import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppTitle() {
    return (
        <View>
            <Text style={styles.title}>Fetouh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: 'pacifico',
        fontSize:32
    }
})
