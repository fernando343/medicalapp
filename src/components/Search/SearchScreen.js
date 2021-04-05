import React, { useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ActivityIndicator, Colors } from 'react-native-paper';
//hooks
import { DoctorsContext } from '../../hooks/doctorContext';
//apps
import BackgroudHeaderV from '../../layout/BackgroundHeaderV';
import DoctorItem from '../Doctors/DoctorItem';

const W = Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
    const { isLoading, error, doctors } = useContext(DoctorsContext)
    return (
        <>
            {isLoading &&
                <View style={{ position: "absolute", top: "50%", left: "50%" }}>
                    <ActivityIndicator
                        size={50}
                        animating={true}
                        color={Colors.blue300}
                        style={{marginLeft: -23}}
                    />
                </View>
            }

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
                        data={doctors}
                        renderItem={({ item }) =>
                            <Pressable onPress={() => navigation.navigate("DoctorDetail", {doctor: item})}>
                                <DoctorItem doctor={item} />
                            </Pressable>
                        }
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>

        </>
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