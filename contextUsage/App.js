import React, { useContext} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';

import { PracticeProvider, PracticeContext } from './Global/PracticeContext'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Pages/Profile';
import styles from './App.style'

function HomeScreen({ navigation }) {
  const { val, setVal } = useContext(PracticeContext);
  function ChangeScreen() {
    navigation.navigate('AnotherScreen');
  }
  function RiseValue() {
    setVal(val+1);
  }
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>{val}</Text>
      <TouchableOpacity style={styles.ButtonContainer} onPress={ChangeScreen}>
        <Text style={styles.Button}>go to anotherscreen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonContainer} onPress={RiseValue}>
        <Text style={styles.Button}>rise value </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function AnotherScreen({ navigation }) {
  const { val, setVal } = useContext(PracticeContext);
  function LowerValue() {
    setVal(val-1);
  }
  function BackScreen() {
    navigation.navigate('ProfileScreen')
  }
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>{val}</Text>
      <TouchableOpacity style={styles.ButtonContainer} onPress={BackScreen}>
        <Text style={styles.Button}>go to ProfileScreen with another page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonContainer} onPress={LowerValue}>
        <Text style={styles.Button} >lower value</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PracticeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='AnotherScreen' component={AnotherScreen} />
          <Stack.Screen name='ProfileScreen' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </PracticeProvider>

  );
}
export default App;


