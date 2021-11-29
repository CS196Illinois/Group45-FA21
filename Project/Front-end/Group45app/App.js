import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Group45app/Screens/HomePage';
import JouranlScreen from '../Group45app/Screens/JournalInput';
import InputPage from '../Group45app/Screens/JournalPage';
import login from '../Group45app/Screens/login';
import signup from '../Group45app/Screens/signup';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journal" component={JouranlScreen} />
        <Stack.Screen name="JournalInput" component={InputPage} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
