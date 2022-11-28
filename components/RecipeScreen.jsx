import React from 'react';
import { Button, Text, SafeAreaView,StyleSheet } from "react-native";
import {RecipeCard} from "./RecipeCards";

let RecipeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
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

export {RecipeScreen};