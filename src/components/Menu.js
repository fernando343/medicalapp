import React from 'react';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Apps
import HomeStack from './Home/HomeStack';
import SearchStack from './Search/SearchStack';
import FavoritesStack from './Favorites/FavoritesStack';
import AppoimentsStack from './Appointments/AppoimentsStack';
import ProfileStack from './Profile/ProfileStack';

const Tabs = createBottomTabNavigator();

const Menu = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: "#005F95"
                }}>
                <Tabs.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }} />
                <Tabs.Screen
                    name="Search"
                    component={SearchStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={size} />
                        ),
                    }} />
                <Tabs.Screen
                    name="Favorites"
                    component={FavoritesStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" color={color} size={size} />
                        ),
                    }} />
                <Tabs.Screen
                    name="Appoiments"
                    component={AppoimentsStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calendar" color={color} size={size} />
                        ),
                    }} />
                <Tabs.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default Menu;