import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
//import { render } from 'react-dom';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default function affirmations1({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getAffirmation = async () => {
    try {
     const response = await fetch('http://10.0.2.2:5000/affirmation');
     const json = await response.json();
     console.log(json.affirmation)
     setData(json.affirmation);
   } catch (error) { 
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  useEffect(() => {
    getAffirmation();
  }, []);

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
    <View style={{ flex:1}}><Text style = {styles.title1}>Affirmations </Text></View>
    <View style={{ flex:3, paddingTop: 50}}>
    <Text style = {styles.textmain}>{data} </Text>
    <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Another One`}
            onPress={() => navigation.navigate('affirmations1')}
          />
    <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Something More Specific`}
            onPress={() => navigation.navigate('affirmations2')}
          />
      <Button
            buttonStyle={{backgroundColor: '#94F385', borderRadius: 50, marginVertical: 10}}
            textStyle={{textAlign: 'center', fontSize: 17}}
            title={`Home`}
            onPress={() => navigation.navigate('HomePage')}
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

 //export default affirmations1;