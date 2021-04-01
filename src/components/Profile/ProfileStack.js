import React from 'react';
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
//component

const Stack = createStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;