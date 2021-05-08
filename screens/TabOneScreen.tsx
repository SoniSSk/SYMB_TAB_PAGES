import * as React from 'react';

import { SafeAreaView, StyleSheet, TextInput } from "react-native";
//import { StyleSheet } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';

import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.separator}>
      <View lightColor="White" darkColor="White" />
      <Text >First Name</Text>
      <TextInput style={styles.input}> Kuldeep</TextInput>
      <Text >Last Name</Text>
      <TextInput style={styles.input}>  Soni  </TextInput>
      <Text >Email</Text>
      <TextInput style={styles.input}>  Kuldeepsoni3099@gmail.com  </TextInput>
      <Text >Mobile No.</Text>
      <TextInput style={styles.input}>  8960044346 </TextInput>
      <Text style={styles.linkText}>Save </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
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
  input: {
    color: 'green',
    height: 20,
    margin: 2,
    borderWidth: 1,
  },
  
});
