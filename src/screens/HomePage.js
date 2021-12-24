import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.textStyle}>Hi there!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Component')}
            >
                <Text style={styles.ButtonStyle}>Go to Components Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('List')}
            >
                <Text style={styles.ButtonStyle}>Go to list Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Image')}
            >
                <Text style={styles.ButtonStyle}>Go to Images</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Box')}>
                <Text style={styles.ButtonStyle}>Box Model</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Ex')}>
                <Text style={styles.ButtonStyle}>Exercise</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    ButtonStyle: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,
        color: 'blue',
    }
})

export default HomePage;




