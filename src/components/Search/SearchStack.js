import React from 'react'
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import DoctorDetail from '../Doctors/DoctorDetail';
import { Text } from 'react-native';

const Stack = createStackNavigator()

const SearchStack = () => {
    return (
        <Stack.Navigator
            headerMode="none">
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
        </Stack.Navigator>
    );
}

export default SearchStack;