import React from 'react'

import { Button, Text, SafeAreaView,StyleSheet } from "react-native"


let HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text></Text>
        </SafeAreaView>
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

export {HomeScreen};