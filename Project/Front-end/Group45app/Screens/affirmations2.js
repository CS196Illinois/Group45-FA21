import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { render } from 'react-dom';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';


const affirmations1 = () => {
  return(
    <SafeAreaView style={[styles.container, {
      flexDirection: "column"
    }]}>
    <View style={{ flex:1}}><Text style = {styles.title1}>Affirmations </Text></View>
    <View style={{ flex:3, paddingTop: 50}}><Text style = {styles.textmain}>Insert affirmations here </Text></View>
    <View style={{ flex:2, paddingTop: 50}}>
    <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Easy Come, Easy Go`}
            onPress={() => navigation.navigate('affirmations1')}
          />
      <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Home`}
            onPress={() => navigation.navigate('HomePage')}
          />
        </View>
    </SafeAreaView>
  );
};

      

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

 export default affirmations1;