import React from 'react';
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
//component
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;