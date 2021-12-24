import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const students = [
        { name: 'student#1', Age: '10' },
        { name: 'student#2', Age: '11' },
        { name: 'student#3', Age: '12' },
        { name: 'student#4', Age: '13' },
        { name: 'student#5', Age: '14' },
        { name: 'student#6', Age: '15' },
        { name: 'student#7', Age: '16' },
        { name: 'student#8', Age: '17' },
        { name: 'student#9', Age: '18' },
        { name: 'student#10', Age: '19' }
    ]

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={true}
                data={students}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}   -   Age:{item.Age}</Text>
                }}
                keyExtractor={student => student.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        marginVertical: 40
    }
});

export default ListScreen;