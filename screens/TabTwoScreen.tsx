import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.separator} >
      
      <View lightColor="#eee" darkColor="white" />
      <Text> Current Balance 180 </Text>
      <View></View>

      <Text style={styles.linkText}>Add Money  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    margin: 5,
    marginVertical: 10,
    height: 1,
    width: '97%',
  },
  linkText: {
    margin: 10,
    fontSize: 14,
    color: '#2e78b7',
    
  },
});
