import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './Components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                ImageSource={require('../../assets/forest.jpg')}
                ImageScore={9}
            />
            <ImageDetail
                title="Beach"
                ImageSource={require('../../assets/beach.jpg')}
                ImageScore={7}
            />
            <ImageDetail
                title="Mountain"
                ImageSource={require('../../assets/mountain.jpg')}
                ImageScore={4}
            />
        </View>
    )
}

const Styles = StyleSheet.create({

})

export default ImageScreen;