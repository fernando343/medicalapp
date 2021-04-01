import React from 'react';
//navgiation
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from './FavoriteScreen';
//component

const Stack = createStackNavigator()

const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={FavoriteScreen} />
        </Stack.Navigator>
    );
}

export default FavoritesStack;