import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";


const SearchBarThing = (props) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(x) => {props.setSearch(x)}}
                placeholder='Search Here...' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#e6e1e1',
        borderRadius: 12,
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 35,
        padding: 5,
        borderRadius: 12,
    }
})

export {SearchBarThing}