import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import Welcome from '../pages/Welcome';
import TabNavigator from './TabNavigator';
import UserInfo from '../pages/UserInfo';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome}
        options={{ headerShown: false }}
         />
        <Stack.Screen name="DashBoard" component={TabNavigator}
        options={{ headerShown: false }}
         />
        <Stack.Screen
          name="Details"
          component={UserInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
