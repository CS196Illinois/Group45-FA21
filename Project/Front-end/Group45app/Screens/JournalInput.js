import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function InputPage({ navigation }) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title1}>Welcome to</Text>
      <Text style = {styles.title2}>Journal</Text>
      <Text style = {styles.text}>
      Journal is designed to be your 
      space to write your thoughts, 
      feelings, or anything your mind 
      desires. </Text>
      <Text style = {styles.textMain1}>Journal offers two options</Text>
      <Text style = {styles.subText}>Generate Topic:</Text>
      <Text style = {styles.textMain}>Generate a random topic</Text>
      <Text style = {styles.subText}>Breeze:</Text>
      <Text style = {styles.textMain}>Write about anything</Text>
      <Text style = {styles.textMain}>
      We provide the space, you provide YOUR words. 
      </Text>
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
        title = {'Generate Topic'}
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
        title = {'Breeze'}
        onPress={() => navigation.navigate('JournalInput')}
        />
    <Button
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderRadius: 25,
          marginVertical: 10,
          minHeight: 50,
          width: 150, 
          
        }}
        textStyle = {{
          textAlign: 'center',
          fontSize: 17
        }}
        title = {'Return Home'}
        onPress={() => navigation.navigate('Home')}
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
  textMain1: {
    marginTop: 10,
    fontSize: 17,
    textAlign: 'Center',
    marginVertical: 5,
    fontStyle: 'comfortaa',
  },
  text: {
    marginTop: 25,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    fontStyle: 'comfortaa',
  },
    textMain: {
    fontSize: 17,
    textAlign: 'Center',
    marginVertical: 5,
    fontStyle: 'comfortaa',
  },
  subText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    fontStyle: 'comfortaa',
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