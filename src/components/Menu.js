import React, { Component } from 'react';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Home/HomeStack';

const Tabs = createBottomTabNavigator();

const Menu = () =>{
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={HomeStack} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default Menu;