import React from 'react'

import { Button, Text, SafeAreaView,StyleSheet } from "react-native"
import {HomeScreen} from "./HomeScreen";
import {RecipeScreen} from "./RecipeScreen";
import {BrowseScreen} from "./BrowseScreen";
import {AccountScreen} from "./AccountScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

let TabThingy = (props) => {
    return(
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
            }} name="Home" children={() => <HomeScreen user={props.user} />} />

            <Tab.Screen options={{
                tabBarLabel: 'Recipes',
                headerStyle: {backgroundColor: '#36446E'},
                headerTintColor: '#FFF',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bookmark" color={color} size={size} />
                ),
            }}
                        name='Recipes Screen'
                        children={() => <RecipeScreen user={props.user} />} />

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
                children={() => <BrowseScreen user={props.user} />} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Account',
                    headerStyle: { backgroundColor: '#36446E' },
                    headerTintColor: '#FFF',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
                name={'Account Screen'} children={() => <AccountScreen user={props.user} getUser={props.getUser} />} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerBottom:{
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
        flexDirection:'row'
    },
    AppBarTitle:{
        color:'#EBEBEB',
        fontWeight:'900',
        fontSize:'25%',
        fontFamily:'American Typewriter',
    }
});

export {TabThingy};