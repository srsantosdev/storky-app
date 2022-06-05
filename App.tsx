import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';

// import {Opening} from './src/screens/Opening';
// import {Presetation1} from './src/screens/Presetation1';
import {Presetation2} from './src/screens/Presetation2';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Presetation2 />;
};

export default App;
