import React from 'react';
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
import AppoimentScreen from './AppoimentsScreen';
//component

const Stack = createStackNavigator()

const AppoimentsStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Appoiments" component={AppoimentScreen} />
        </Stack.Navigator>
    );
}

export default AppoimentsStack;