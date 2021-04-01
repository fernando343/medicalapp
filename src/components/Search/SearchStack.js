import React from 'react'
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator()

const SearchStack = () => {
    return (
        <Stack.Navigator
            headerMode="none">
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

export default SearchStack;