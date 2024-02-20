import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import CitiesScreen from './screens/CitiesScreen';
import WeatherDetails from './screens/WeatherDetails';

export default function App() {

  const [pressed, setPressed] = useState(false);
  const [citySelected, setCitySelected] = useState(false);
  const [city, setCity] = useState(false);

  const [fontsLoaded] = useFonts({
    'freedom': require('./assets/fonts/Freedom-10eM.ttf'),
    'queen-sides': require('./assets/fonts/QueensidesLight-ZVj3l.ttf')
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  let screen = (<WelcomeScreen setPressed={setPressed}/>);

  if (pressed) {
    screen = (<CitiesScreen setCity={setCity} setCitySelected={setCitySelected} setPressed={setPressed}/>);
  }
  
  if(citySelected){
    screen = (<WeatherDetails city={city}/>)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
