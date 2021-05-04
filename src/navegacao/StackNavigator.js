import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaPrincipal from "../telas/TelaPrincipal";
import TelaAcervo from "../telas/TelaAcervo";
import TelaCadastro from '../telas/TelaCadastro'
import TelaEmprestimo from '../telas/TelaEmprestimo'
import TelaCliente from '../telas/TelaCliente'
import TelaCadastroCliente from '../telas/TelaCadastroCliente'
import TelaDevolucao from '../telas/TelaDevolucao'

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const PrincipalStackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"TelaPrincipal"}
    >
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}} />
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{headerShown:false}} />
      <Stack.Screen name="TelaEmprestimo" component={TelaEmprestimo} options={{headerShown:false}} />
      <Stack.Screen name="TelaCadastroCliente" component={TelaCadastroCliente} options={{headerShown:false}} />
      <Stack.Screen name="TelaDevolucao" component={TelaDevolucao} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

const ClienteStackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"TelaCliente"}
    >
      <Stack.Screen name="TelaCliente" component={TelaCliente} options={{headerShown:false}} />
      <Stack.Screen name="TelaCadastroCliente" component={TelaCadastroCliente} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

const AcervoStackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={screenOptionStyle} 
      initialRouteName={"TelaAcervo"}
    >
      <Stack.Screen name="TelaAcervo" component={TelaAcervo} options={{headerShown:false}} />
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export { PrincipalStackNavigator, ClienteStackNavigator, AcervoStackNavigator };
