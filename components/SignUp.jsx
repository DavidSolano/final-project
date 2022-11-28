import React, {useState} from "react";

import {Button, Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from "react-native"
import {Card, Input} from "@ui-kitten/components";


const SignUpThing = (props) => {
    let [emailValue, setEmailValue] = useState();
    let [passwordValue, setPasswordValue] = useState();
    let [visible, setVisible] = useState(false);

    let SignUpWithPwsd = () => {
        setVisible(true)
        props.SignUpWithEandP(emailValue, passwordValue)
        setVisible(false)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{marginVertical: 20}} category={'h1'}>Sign Up Page</Text>
                <TextInput
                    style={{width: '80%'}}
                    onChangeText={(x) => {setEmailValue(x)}}
                    placeholder={'Enter your Email'}
                    keyboardType='email-address'
                />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={{width: '80%'}}
                    onChangeText={(y) => {setPasswordValue(y)}}
                    placeholder={'Enter your password'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: '#273296',
                        color: '#FFF',
                        paddingVertical: 10,
                        paddingHorizontal: 30,
                        margin: 30,
                        borderRadius: 10}}
                        onPress={() => {SignUpWithPwsd()}}>Sign-In</Text>
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
    textStuff: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {SignUpThing}