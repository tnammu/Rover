import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "./FrontEnd_Ui_Pages/HomePage";
const Stack = createStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator style={styles.container} >
              <Stack.Screen name="Welcome" component={HomePage} options={({ navigation, route }) => ({
                  headerTitle: "Welcome", headerTitleStyle: {
             
                      fontSize: 16
                  }
              })} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

