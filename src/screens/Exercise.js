import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Exercise = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.ViewOneStyle} />
            <View style={styles.ViewTwoStyle} />
            <View style={styles.ViewThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    ViewOneStyle: {
        backgroundColor: 'red',
        height: 70,
        width: 70
    },
    ViewTwoStyle: {
        backgroundColor: 'green',
        height: 70,
        width: 70,
        position: 'relative',
        top: 70
    },
    ViewThreeStyle: {
        backgroundColor: 'purple',
        height: 70,
        width: 70
    },
})

export default Exercise;