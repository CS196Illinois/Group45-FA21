import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { render } from 'react-dom';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';


export default function affirmationsHome({ navigation }) {
  return(
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
    <View style={{ flex:1}}><Text style = {styles.title1}>Welcome to </Text>
        <Text style = {styles.title2}>Affirmations! </Text></View>
    <View style={{ flex:3, paddingTop: 50}}><Text style = {styles.textmain}>Affirmations is designed to be a space to clear the mind and read statements to boost confidence or mood. </Text>
        <Text style = {styles.textmain}>Affirmations offers two options. </Text>
        <Text style = {styles.subtext}>Easy come, easy go:</Text>
        <Text style = {styles.textmain}>Affirmations will randomly appear on your screen for you to read.</Text>
</View>
    <View style={{ flex:1, paddingTop: 40}}>
        <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Easy Come, Easy Go`}
            onPress={() => navigation.navigate('Easy Come, Easy Go')}
          />
        </View>
    </View>
  )
}

      

const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
     backgroundColor: '#fff',
     justifyContent: 'center',
    },
  textmain: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 2.5,
    //fontStyle: 'Comfortaa',
   },
   subtext: {
     fontSize: 17,
     textAlign: 'center',
     marginVertical: 2.5,
     //fontStyle: 'Comfortaa',
     color: '#94F385',
   },
   title1: {
    color: "#20232a",
    textAlign: "left",
    paddingTop: 50,
    paddingLeft: 20,
    fontSize: 40,
    fontWeight: "bold"
  },
  title2: {
    color: "#20232a",
    textAlign: "right",
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold"
  }
 });

// export default affirmationsHome;

/* 
        <Text style = {styles.subtext}>Something more specific:</Text>
        <Text style = {styles.textmain}>Scroll a list of affirmation and read specific ones.</Text>
        <Text style = {styles.textmain}>We want you to feel better about youself.</Text>
*/