import React from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function JouranlScreen() {
  return (
    <View style={styles.container}>
        <Text style = {styles.title1}>Journal</Text>
        <Text>Clear your mind...and write.</Text>
        <Text style = {styles.textMain}>Prompt: </Text>
        
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <TextInput 
            multiline
            textAlignVertical
            style={styles.input} />
        </View>
</TouchableWithoutFeedback>

<StatusBar style = 'auto' />
      <Button
        style = {{
          width: 200
        }}
        buttonStyle = {{
          backgroundColor: '#94F385',
          borderRadius: 50,
          marginVertical: 1
        }}
        textStyle = {{
          textAlign: 'center',
          fontSize: 17
        }}
        title = {'Finished'}
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
    input: {
      backgroundColor: '#E7EAE7',
      borderWidth: 2,
      borderColor: '#52D852',
      padding: 8,
      margin: 20,
      width: 350,
      height: 400,
      borderRadius: 10,
    },
  title1: {
    color: '#20232a',
    textAlign: 'left',
    fontSize: 45,
    fontWeight: "bold",
  },
  textMain: {
    margin: 40,
    fontSize: 17,
    textAlign: 'Center',
    marginVertical: 5,
    fontStyle: 'comfortaa',
  },
});