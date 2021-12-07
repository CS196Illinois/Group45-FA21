import React, { useState } from 'react';
//import { render } from 'react-dom';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default function affirmations2({ navigation }) {
  const [aff, setAff] = useState('You are amazing.')
  const clickHandler = () => {
    setAff('Keep going. It is all worth it.')
  }
  return(
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
    <View style={{ flex:1}}><Text style = {styles.title1}>Affirmations </Text></View>
    <View style={{ flex:3, paddingTop: 50}}><Text style = {styles.textmain}> {aff} </Text></View>
    <View style={{ flex:1, paddingTop: 50}}>
    <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 1}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Another One`}
            onPress={clickHandler}
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
    paddingVertical: 100,
    //fontStyle: 'Comfortaa',
   },
   subtext: {
     fontSize: 17,
     textAlign: 'center',
     marginVertical: 5,
     //fontStyle: 'Comfortaa',
     color: '#94F385',
   },
   title1: {
    color: "#20232a",
    textAlign: "left",
    paddingTop: 45,
    paddingLeft: 20,
    fontSize: 40,
    fontWeight: "bold"
  },
  title2: {
    color: "#20232a",
    textAlign: "right",
    fontSize: 28,
    marginBottom: 5,
    fontWeight: "bold"
  }
 });