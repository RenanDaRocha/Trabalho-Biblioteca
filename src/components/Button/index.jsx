import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Button = (props) => (
  <FAB
    style={styles.fab}
    icon="plus"
    {...props}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
  },
})

export default Button;