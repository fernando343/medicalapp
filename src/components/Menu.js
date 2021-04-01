import React from 'react';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Home/HomeStack';
import SearchStack from './Search/SearchStack';
import FavoritesStack from './Favorites/FavoritesStack';
import AppoimentsStack from './Appointments/AppoimentsStack';

const Tabs = createBottomTabNavigator();

const Menu = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={HomeStack} />
                <Tabs.Screen name="Search" component={SearchStack} />
                <Tabs.Screen name="Favorites" component={FavoritesStack} />
                <Tabs.Screen name="Appoiments" component={AppoimentsStack} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default Menu;