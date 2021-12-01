import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { render } from 'react-dom';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

const welcome = () => {
    return(
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
      <View style={{ flex:1}}><Text style = {styles.title1}>Welcome</Text>
          <Text style = {styles.title2}>Everything is okay.</Text></View>
      <View style={{ flex:3, paddingTop: 50}}><Text style = {styles.textmain}>Breeze is an app focused on bettering oneself one step at a time.  We want you to take life with a Breeze.  </Text>
        </View>
      <View style={{ flex:1, paddingTop: 40}}>
          <Button
              buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
              textStyle={{textAlign: 'center', fontSize: 17}}
              title={`Continue`}
              onPress={() => navigation.navigate('signup')}
            />
          </View>
      </View>
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
      paddingVertical: 50,
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
      textAlign: "center",
      paddingTop: 50,
      paddingLeft: 20,
      fontSize: 40,
      fontWeight: "bold"
    },
    title2: {
      color: "#20232a",
      textAlign: "center",
      fontSize: 20,
      marginBottom: 5,
    }
   });
  
   export default Welcome;