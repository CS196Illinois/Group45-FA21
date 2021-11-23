import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function genButton({ text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{ text }</Text> 
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 75,
    paddingHorizontal: 10,
    backgroundColor: '#32D936', 
    marginHorizontal: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})
