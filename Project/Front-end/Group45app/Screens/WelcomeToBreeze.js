import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function IntroWelcome({ navigation }) {
  return (
    <View style = {styles.container}>
      <Image 
      style={{width: 250, height: 250}}
      source={require('../assets/logo.png')} />
      <Text style = {styles.title2}>Mental Health App</Text>
      <Text style = {styles.text}>
      One step at a time to bettering oneself </Text>
      <StatusBar style = 'auto' />
      <Button
        style = {{
          marginTop: 25,
        }}
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderRadius: 25,
          marginVertical: 10,
          minHeight: 75,
          width: 300, 
        }}
        textStyle = {{
          textAlign: 'center',
          fontSize: 17
        }}
        title = {'Login'}
        onPress={() => navigation.navigate('Login')}
        />
      <Button
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderRadius: 25,
          marginVertical: 10,
          minHeight: 75,
          width: 300, 
          
        }}
        textStyle = {{
          textAlign: 'center',
          fontSize: 17
        }}
        title = {'Sign Up'}
        onPress={() => navigation.navigate('Welcome - New User')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 25,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    //fontStyle: 'comfortaa',
  },

  title1: {
    color: '#20232a',
    textAlign: 'left',
    fontSize: 45,
    fontWeight: "bold",
  },
  title2: {
    color: '#20232a',
    textAlign: 'right',
    fontSize: 20,
    marginBottom: 5,
  }
});