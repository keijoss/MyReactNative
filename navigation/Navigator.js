import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import EducationScreen from '../screens/EducationScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
}

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Education" component={EducationScreen} />
      <Stack.Screen name="Skills" component={SkillsScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;