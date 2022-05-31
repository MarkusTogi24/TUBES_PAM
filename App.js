import * as React from 'react';

import { Store } from './src/redux/store';
import { Provider } from 'react-redux';

import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// PAGES
import Index from './src/pages/Index';
import Cart from './src/pages/Counter';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  return (
    <Provider store={Store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#8f6b87"
            barStyle={{ backgroundColor: '#6e0358', paddingBottom: 10 }}
          >
            <Tab.Screen
              name="Products" 
              component={Index}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="My Cart"
              component={Cart}
              options={{
                tabBarLabel: 'Simple Redux',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="rocket" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
