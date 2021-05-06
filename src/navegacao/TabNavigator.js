import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import { 
  ClienteStackNavigator,
  MainNavigator,

} from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Principal') {
              iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } 
          else if (route.name === 'Clientes') {
              iconName = focused
              ? 'ios-people'
              : 'ios-people-outline';
          } 
          else if (route.name === 'Acervo') {
              iconName = focused
              ? 'ios-book'
              : 'ios-book-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
          },
      })}
      initialRouteName='Principal'
    >      
      <Tab.Screen name="Clientes" component={ClienteStackNavigator} />
      <Tab.Screen name="Principal" component={MainNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator