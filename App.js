import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import TabNavigator from './src/navegacao/TabNavigator'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}} >
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}