import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './components/HomeScreen';
import { RecipeScreen } from './components/RecipeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { BrowseScreen } from './components/BrowseScreen';
import { AccountScreen } from "./components/AccountScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Tab.Navigator>

        <Tab.Screen options={{
                tabBarLabel: 'Home',
                headerStyle:{
                    backgroundColor:'#36446E'
                },
                headerTintColor:'#FFF'
                ,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} name="Home" component={HomeScreen} />

        <Tab.Screen options={{
            tabBarLabel: 'Recipes',
            headerStyle: {backgroundColor: '#36446E'},
            headerTintColor: '#FFF',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bookmark" color={color} size={size} />
            ),
        }}
            name='Recipes Screen'
            component={RecipeScreen} />

        <Tab.Screen
            options={{
                tabBarLabel: 'Browse',
                headerStyle: {backgroundColor: '#36446E'},
                headerTintColor: '#FFF',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
            }}
            name={'Browse Screen'}
            component={BrowseScreen} />

        <Tab.Screen
            options={{
                tabBarLabel: 'Account',
                headerStyle: { backgroundColor: '#36446E' },
                headerTintColor: '#FFF',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
            name={'Account Screen'} component={AccountScreen} />

        </Tab.Navigator>
      </ApplicationProvider>
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
