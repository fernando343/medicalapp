import React, { useContext } from 'react'
import { Pressable, Text } from 'react-native';
import { View, FlatList, StyleSheet } from 'react-native';
import { DoctorsContext } from '../../hooks/doctorContext';
import { FavoritesContext } from '../../hooks/favoritesContext';
import BackgroudHeader from '../../layout/BackgroundHeader';
import AppoimentItem from '../Appointments/AppoimentItem';
import DoctorItem from '../Doctors/DoctorItem';

const HomeScreen = ({ navigation }) => {
    const { isLoading, error, doctors } = useContext(DoctorsContext)

    //console.log(favorites);


    return (
        <View>
            <BackgroudHeader />
            <View>
                <Text style={styles.titleText}>your next appoiment</Text>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].slice(0, 1)}
                    renderItem={() =>
                        <AppoimentItem />
                    }
                    keyExtractor={(item) => item.id.toString()}

                />
            </View>
            <View>
                <Text style={styles.titleText}>Specialist in your area</Text>
                <FlatList
                    data={doctors.slice(2, 3)}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate("DoctorDetail", { doctor: item })}>
                            <DoctorItem doctor={item} />
                        </Pressable>
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 15,
        textTransform: "capitalize"
    }
})

export default HomeScreen;