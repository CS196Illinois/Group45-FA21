import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title1}>Breeze</Text>
      <Text style = {styles.title2}>Welcome [Name] </Text>
      <Text style = {styles.textMain}>
      What's on today's agenda?</Text>
      <StatusBar style = 'auto' />
      <Button
        style = {{
          marginTop: 25,
          borderRadius: 25,
          backgroundColor: '#E5E2E2',
          width: 300,
          minHeight: 200,
          borderColor: '#94F385',
          borderWidth: 5, 
        }}
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderTopRightRadius: 20, 
          borderTopLeftRadius: 20,
        }}
        title = {'How are you feeling?'}
        onPress={() => navigation.navigate('Journal')}
        />
      <Button
        style = {{
          marginTop: 25,
          borderRadius: 25,
          backgroundColor: '#E5E2E2',
          width: 300,
          minHeight: 200,
          borderColor: '#94F385',
          borderWidth: 5, 
        }}
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderTopRightRadius: 20, 
          borderTopLeftRadius: 20,
        }}
        title = {'How is your day?'}
        onPress={() => navigation.navigate('Affirmations')}
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
  textMain: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
    //fontStyle: 'comfortaa',
  },
  subText: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
    //fontStyle: 'comfortaa',
    color: '#94F385',
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
    fontSize: 28,
    marginBottom: 5,
    fontWeight: 'bold',
  }
});