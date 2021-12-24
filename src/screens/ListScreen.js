import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'friend#1', age: '10' },
        { name: 'friend#2', age: '11' },
        { name: 'friend#3', age: '12' },
        { name: 'friend#4', age: '13' },
        { name: 'friend#5', age: '14' },
        { name: 'friend#6', age: '15' }
    ]

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}    -    Age:{item.age}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50
    }
});

export default ListScreen;