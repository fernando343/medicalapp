import React from 'react'
import { Text } from 'react-native';
import { View } from 'react-native';
import BackgroudHeader from '../../layout/BackgroundHeader';
import DoctorItem from '../Doctors/DoctorItem';

const HomeScreen = () => {

    return (
        <View>
            <BackgroudHeader />
            <View>
                <DoctorItem/>
            </View>
        </View>
    );
}

export default HomeScreen;