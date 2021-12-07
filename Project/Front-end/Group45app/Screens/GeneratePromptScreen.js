import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';



export default function generatePrompt({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getJournalPrompts = async () => {
    try {
     const response = await fetch('http://10.0.2.2:5000/prompt');
     const json = await response.json();
     console.log(json.prompt)
     setData(json.prompt);
   } catch (error) { 
     console.error(error);
   } finally {
     setLoading(false);
   }
  }
  
  useEffect(() => {
    getJournalPrompts();
  }, []);

  return (
    <View style={styles.container}>
        <Text style = {styles.title1}>Journal</Text>
        <Text>Clear your mind...and write.</Text>
        <Text style = {styles.textMain}>Prompt: </Text>
        <Text style = {styles.textMain}>{data}</Text>
        
        
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <TextInput 
            multiline
            textAlignVertical="top"
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
        onPress={() => navigation.navigate('Journal')}
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
    textAlign: 'center',
    marginVertical: 5,
    //fontStyle: 'comfortaa',
  },
});