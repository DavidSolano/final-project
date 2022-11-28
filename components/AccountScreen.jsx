import React, {useEffect, useState} from 'react';

import {Button, Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import User from "../Models/User";
import {auth, firebase} from '../firebaseConfig';
import {SignUp} from './SignUp';

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
                props.getUser();
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
                props.getUser();
            }).catch((e) => {
                console.log("Signing up failed", e)
            })
    }

    /*let setUserName = async () => {
        const userUpdate = firebase.auth().currentUser;

        await userUpdate.updateProfile({
            displayName: nameThing,
        })

        props.getUser()
        setUser(props.user)
    }*/

    let LogOut = async () => {
        await firebase.auth().signOut()
        setUserLoggedIn(false)
        await props.getUser();
    }

    if (userLoggedIn){
        return(
            <SafeAreaView>
                <Text style={{marginTop: 20, marginBottom: 5, color: '#000'}} category='h6'>{user.email}</Text>

                <TouchableOpacity onPress={LogOut}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView>
                <Button title='Sign up' />
                <Button title='log In' />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});

export {AccountScreen};