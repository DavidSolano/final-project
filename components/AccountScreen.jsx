import React, {useEffect, useState} from 'react'

import {Button, Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from "react-native"
import User from "../Models/User"
import SignUp, {SignUpThing} from './SignUp';
import {LogIn} from './LogIn';
import {auth, firebase} from '../firebaseConfig';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Card} from "@ui-kitten/components";

let AccountScreen = (props) => {
    let [user, setUser] = useState();
    let [userLoggedIn, setUserLoggedIn] = useState(false)
    let [nameThing, setNameThing] = useState();

    let setUserMan = () => {
        if (props.user !== null){
            setUser(props.user)
            setUserLoggedIn(true)
        }
    }

    let LoginWithEandP = async (email, password) => {
        let god = await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                var user = userCredentials.user;
                setUser(new User(user))
                setUserLoggedIn(true);
            }).catch((e) => {
                console.log("logging in failed", e)
            })
    }

    let SignUpWithEandP = async (email, password) => {
        let god = await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                var user = userCredentials.user;
                setUser(new User(user))
                setUserLoggedIn(true);
            }).catch((e) => {
                console.log("Signing up failed", e)
            })
    }

    let LogOut = async () => {
        await firebase.auth().signOut()
        setUserLoggedIn(false)
        await props.getUser();
    }

    if (userLoggedIn){
        return(
            <SafeAreaView>
                <Card style={{marginTop: 50, marginBottom: 20}}>
                    <Text style={{marginTop: 20, marginBottom: 5, color: '#000', fontSize: 15}}>User Email:</Text>
                    <Text style={{marginTop: 20, marginBottom: 5, color: '#000', fontSize: 20}}>{user.email}</Text>
                </Card>


                <TouchableOpacity onPress={LogOut}>
                    <Text style={{
                        backgroundColor: '#273296',
                        color: '#FFF',
                        paddingVertical: 10,
                        paddingHorizontal: 30,
                        margin: 30,
                        textAlign: 'center',
                        borderRadius: 10}}>Log Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    } else {
        const Drawer = createDrawerNavigator();

        return (
            <NavigationContainer independent={true}>
                <Drawer.Navigator initialRouteName="Sign Up">
                    <Drawer.Screen SignUpWithEandP={SignUpWithEandP}
                                   children={() => <SignUpThing SignUpWithEandP={SignUpWithEandP}/>}
                                   name="Sign Up"
                                    />

                    <Drawer.Screen LoginWithEandP={LoginWithEandP}
                                   children={() => <LogIn LoginWithEandP={LoginWithEandP}/>}
                                   name='Log In'
                                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({

});

export {AccountScreen};