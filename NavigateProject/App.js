import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMeScreen from './AboutMeScreen'; // Импортируем экран "О Себе"
import MyLanguageScreen from './MyLanguageScreen'; // Импортируем экран "Мои языки программирования"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="About" 
          component={AboutMeScreen}
          options={{ headerShown: false }} // Скрыть заголовок для этого экрана
        />
        <Tab.Screen 
          name="Languages" 
          component={MyLanguageScreen}
          options={{ headerShown: false }} // Скрыть заголовок для этого экрана
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



//{AboutMeScreen} 
//{MyLanguageScreen}
// import AboutMeScreen from './AboutMeScreen';
// import MyLanguageScreen from './MyLanguageScreen';