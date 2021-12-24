import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>child#1</Text>
            <Text style={styles.textTwoStyle}>child#2</Text>
            <Text style={styles.textThreeStyle}>child#3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        alignSelf: 'stretch',
        // flex: 1
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        // flex: 1
        // position: 'absolute',
        fontSize: 20,
        // top: 90,
        // left: 100,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        // flex: 1
    },
})

export default BoxScreen;