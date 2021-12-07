/*
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      
      //<Image style={styles.image} source={require("./assets/logo.png")} />

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.signup_button}>Don't Have an Account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#94F385",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  signup_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#94F385",
  },
});

*/

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from 'react-native-elements';
 
export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(true);
  var [data] = useState(0);
  const checkLogin = async (username, password) => {
    try {
     const response = await fetch('http://10.0.2.2:5000/login/' + username + '/' + password + '/true');
     const json = await response.json();
     console.log(json.message)
     data = json.success
     console.log(data)
     if (data == 1) {
      navigation.navigate('Home')
    } else {
      <Text>json.message</Text>
    }
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  function login(username, password) {
    checkLogin(username, password)
    var loggedIn = data
    console.log(loggedIn)
    if (loggedIn == 1) {
      navigation.navigate('Home')
    } else {
      <Text>Json.message</Text>
    }
  }
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
  </TouchableWithoutFeedback>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

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
        title = {'LOGIN'}
        onPress={() => checkLogin(email, password) /*navigation.navigate('Home')*/}
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#94F385",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  signup_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#94F385",
  },
});
