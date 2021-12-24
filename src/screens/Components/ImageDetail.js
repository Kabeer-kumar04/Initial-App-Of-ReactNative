import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {

    console.log(props);

    return (
        <View>
            <Image source={props.ImageSource} />
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.scoreStyle}>Image score-{props.ImageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
    },
    scoreStyle: {
        fontSize: 20
    }
})

export default ImageDetail;