import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Group45app/Screens/HomePage';
import JouranlScreen from '../Group45app/Screens/JournalInput';
import InputPage from '../Group45app/Screens/JournalPage';
import affirmationsHome from '../Group45app/Screens/affirmationshome';
import affirmations1 from './Screens/affirmations1';
import login from './Screens/login';
import GeneratePrompt from './Screens/GeneratePromptScreen';
import welcome from './Screens/welcome';
import signup from './Screens/signup';
import IntroWelcome from './Screens/WelcomeToBreeze';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={IntroWelcome}/>
        <Stack.Screen name="Welcome - New User" component={welcome}/>
        <Stack.Screen name="Sign Up" component={signup}/>
        <Stack.Screen name="Login" component={login}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Journal" component={JouranlScreen}/>
        <Stack.Screen name="JournalGenerate" component={GeneratePrompt}/>
        <Stack.Screen name="JournalInput" component={InputPage} />
        <Stack.Screen name="Affirmations" component={affirmationsHome} />
        <Stack.Screen name="Easy Come, Easy Go" component={affirmations1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
