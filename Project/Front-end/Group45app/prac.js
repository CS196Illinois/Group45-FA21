import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.textmain}>Welcome to </Text>
      <Text style ={styles.textmain}>Affirmations! </Text>
      <Text style ={styles.textmain}>Affirmations is designed to be a space to clear the mind and read statements to boost confidence or mood. </Text>
      <Text style ={styles.textmain}>Affirmations offers two options. </Text>
      <Text style ={styles.subtext}>Easy come, easy go:</Text>
      <Text style ={styles.textmain}>Affirmations will randomly appearon your screen for you to read.</Text>
      <Text style ={styles.subtext}>Something more specific:</Text>
      <Text style ={styles.textmain}>Scroll a list of affirmation and read specific ones.</Text>
      <Text style ={styles.textmain}>We want you to feel better about youself.</Text>
      <StatusBar style="auto" />
      <Button
          buttonStyle={{backgroundColor: '#94F385', borderRadius: 50,}}
          textStyle={{textAlign: 'center'}}
          title={`Easy Come, Easy Go`}
        />
        <Button
          buttonStyle={{backgroundColor: '#94F385', borderRadius: 50}}
          textStyle={{textAlign: 'center'}}
          title={`Something More Specific`}
        />
      </View>
  );
}

      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textmain: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'Comfortaa',
  },
  subtext: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'Comfortaa',
    color: '#94F385',
  },
});