import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginNavigation from './src/navegacao/LoginNavigation'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}} >
      <NavigationContainer>
        <LoginNavigation />  
      </NavigationContainer>            
    </SafeAreaView>
  );
}
