import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import StepsScreen from "./src/screens/StepsScreen";

const Stack = createStackNavigator();

const App = () => {
  const steps = [
    { step: 1, description: 'Separa los materiales reciclables del resto de la basura.' },
    { step: 2, description: 'Lava los envases antes de reciclarlos.' },
    { step: 3, description: 'Identifica los contenedores de reciclaje de tu área.' },
    { step: 4, description: 'Coloca los materiales reciclables en los contenedores correspondientes' }
  ];

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="StepsScreen"
              component={StepsScreen}
              initialParams={{ steps }}  // Pasar los pasos correctamente
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;


