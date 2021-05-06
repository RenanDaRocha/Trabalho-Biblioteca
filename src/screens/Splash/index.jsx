import * as React from 'react';
import { useEffect } from 'react';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {StyleProvider} from 'native-base';
import FesoLogo from '../../images/UNIFESO.png';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  logo: {
    resizeMode: 'center',
  },
});

export default function Splash(props) {
  const navigation = props.navigation;
  
  const goToList = () => {
    navigation.replace('LivroList');
    props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: true
    });
  };

  useEffect(() => {
    props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false
    });
    setTimeout(goToList, 3000)    
  });

  return (
    <StyleProvider>
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.logo} source={FesoLogo} />
        </View>
      </SafeAreaView>
    </StyleProvider>
  );
}