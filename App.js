import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Pages/Home/Home";
import Destiny from "./Pages/Destiny/Destiny";

/* Cria a pilha de navegação */
const Stack = createStackNavigator();

/* Carrega as páginas Home, Destiny, na pilha */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>

        <Stack.Screen
          name="Home"
          component={Home} />
          
        <Stack.Screen
          name="Destiny"
          component={Destiny} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;