import React, {useState} from "react";

import {Button, Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from "react-native"
import {Card, Input} from "@ui-kitten/components";


const LogIn = (props) => {
    let [emailValue, setEmailValue] = useState();
    let [passwordValue, setPasswordValue] = useState();
    let [visible, setVisible] = useState(false);

    let loginWithPsswd = async () => {
        setVisible(true)
        await props.LoginWithEandP(emailValue, setEmailValue)
        setVisible(false)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{marginVertical: 20}} category={'h1'}>Log In Page</Text>
                <TextInput
                    style={{width: '80%'}}
                    onChangeText={(x) => {setEmailValue(x)}}
                    placeholder={'Enter your Email'}
                />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={{width: '80%'}}
                    onChangeText={(y) => {setPasswordValue(y)}}
                    placeholder={'Enter your password'}
                />
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: '#273296',
                        color: '#FFF',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        margin: 20,
                        borderRadius: 10}}
                        onPress={() => {loginWithPsswd()}}>Sign-In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export {LogIn}