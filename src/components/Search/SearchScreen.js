import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';

const W = Dimensions.get('window').width;

const SearchScreen = () => {
    return (
        <View>
            <View style={styles.Header}>
                <BackgroudHeaderV />
                <View style={styles.pos}>
                    <Text style={styles.titleText}>Search</Text>
                    <Searchbar style={styles.searchBar} placeholder="Search for city"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        position: "relative",
    },
    pos:{
        width: W,
        position: "absolute",
    },
    titleText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 30,
        marginVertical: 20
    },
    searchBar:{
        marginHorizontal: 30
    }
})

export default SearchScreen;