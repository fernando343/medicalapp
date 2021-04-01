import React from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';
import DoctorItem from '../Doctors/DoctorItem';

const W = Dimensions.get('window').width;

const SearchScreen = () => {
    return (
        <View>
            <View style={styles.Header}>
                <BackgroudHeaderV />
                <View style={styles.pos}>
                    <Text style={styles.titleText}>Search</Text>
                    <Searchbar style={styles.searchBar} placeholder="Search for city" />
                </View>
            </View>
            <View>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
                    renderItem={() =>
                        <DoctorItem />
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        position: "relative",
    },
    pos: {
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
    searchBar: {
        marginHorizontal: 30
    }
})

export default SearchScreen;