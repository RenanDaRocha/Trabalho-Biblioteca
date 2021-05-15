import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from '../screens/Splash';

import LivroList from '../ListViews/Livro/'
import LivroForm from '../Forms/Livro';

import ClienteList from '../ListViews/Cliente/'
import ClienteForm from '../Forms/Cliente';

import EmprestimoList from '../ListViews/Emprestimo';
import EmprestimoForm from '../Forms/Emprestimo';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const ClienteStackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"TelaCliente"}
    >
      <Stack.Screen name="ClienteList" component={ClienteList} options={{headerShown:false}} />
      <Stack.Screen name="ClienteForm" component={ClienteForm} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

const MainNavigator = _ => {
  return <>
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"TelaMain"}
    >
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="LivroList" component={LivroList} options={{headerShown:false}} />
      <Stack.Screen name="LivroForm" component={LivroForm} options={{headerShown:false}} />
    </Stack.Navigator>
  </>
}

const EmprestimoNavigator = _ => {
  return <>
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"Emprestimo"}
    >
      <Stack.Screen name="EmprestimoList" component={EmprestimoList} options={{headerShown:false}} />
      <Stack.Screen name="EmprestimoForm" component={EmprestimoForm} options={{headerShown:false}} />
    </Stack.Navigator>
  </>
}

export { ClienteStackNavigator, MainNavigator, EmprestimoNavigator};
