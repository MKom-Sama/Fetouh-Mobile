import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-paper'

import AppTitle from '../components/visuals/AppTitle'

import { callNumber,openGPS } from '../utils/linking'

export default function CallUs() {
    return (
        <View>
            <AppTitle />
            <Button mode="contained" onPress={() => {
                callNumber('01015047515')
            }}>
                call us
            </Button>
            <Button mode="contained" onPress={()=>openGPS(31.50715753006112, 31.826428123336655)}>
                location
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({

})
