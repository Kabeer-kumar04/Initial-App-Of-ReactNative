import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    const name = 'Kabeer';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with reactnative</Text>
            <Text style={{ fontSize: 25 }}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    }
})

export default ComponentsScreen;