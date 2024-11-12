// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMeScreen from './AboutMeScreen';
import ProgrammingLanguagesScreen from './ProgrammingLanguagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="О Себе" component={AboutMeScreen} />
                <Tab.Screen name="Мои языки программирования" component={ProgrammingLanguagesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}