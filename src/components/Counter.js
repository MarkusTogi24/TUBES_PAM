import React from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'

import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/cartManager'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
            <View style={{ padding:32 }}>
                <Text style={{ marginTop:10, marginBottom:60, textAlign:'center', fontFamily:'Montserrat-SemiBold', fontSize:24 }}>
                    Menggunakan Redux Sederhana
                </Text>
                <Button icon="plus" color="#6e0358" mode="contained" onPress={() => dispatch(increment())}>
                    Increment
                </Button>
                <Text style={{ marginVertical:30, textAlign:'center', fontFamily:'Montserrat-Bold', fontSize:40 }}>{count}</Text>
                <Button icon="minus" color="#6e0358" mode="contained" onPress={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </View>
    )
}