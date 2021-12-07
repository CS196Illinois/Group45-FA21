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
 
export default function signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(true);
 
  var [data] = useState(0);
  const register = async (username, password) => {
    try {
     const response = await fetch('http://10.0.2.2:5000/register/' + username + '/' + password);
     const json = await response.json();
     console.log(json.message)
     data = json.message
     console.log(data)
     if (data == "success") {
      navigation.navigate('Home')
    } else {
      <Text>Unsuccessful, please try again.</Text>
    }
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  return (
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

      
      <TouchableOpacity style={styles.signupBtn} onPress={() => register(email, password)}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
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
 
 
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#94F385",
  },
});