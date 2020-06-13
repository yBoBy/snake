import * as React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';

function MainMenu({ navigation }) {
  let Image_Http_URL ={};
  return (
    <View style={{ width: '100%', justifyContent: "center", }}>
      <Image source={require('./images/MainMenu/snake.gif')} style = {{height: 300, width: 300, alignSelf: "center", margin: 5 }} />
      <Button
        title="Start a New Game"
        onPress={() => navigation.navigate(' ')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function GameScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.MainMenuButtonText} >
        {"Placeholder for Game"}
      </Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.MainMenuButtonText} >
        {"Placeholder for Settings"}
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main Menu" component={MainMenu} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name=" " component={GameScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  MainMenuButtonText: {
    fontFamily: "Cochin",
    textAlign:"auto"
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
