import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../Forms/Login';
import TabNavigator from '../navegacao/TabNavigator'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  return (  
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"Login"}
    > 
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator
