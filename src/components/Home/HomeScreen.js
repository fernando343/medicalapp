import React from 'react'
import { Text } from 'react-native';
import { View, FlatList, StyleSheet } from 'react-native';
import BackgroudHeader from '../../layout/BackgroundHeader';
import DoctorItem from '../Doctors/DoctorItem';

const HomeScreen = () => {

    return (
        <View>
            <BackgroudHeader />
            <View>
                <Text style={styles.areaText}>Specialist in your area</Text>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].slice(0, 1)}
                    renderItem={() =>
                        <DoctorItem />
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    areaText:{
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 15
    }
})

export default HomeScreen;