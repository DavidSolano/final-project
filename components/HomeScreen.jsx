import React, {useEffect, useState} from 'react'

import {Button, Text, SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity, FlatList} from "react-native"
import axios from "axios";
import {RecipeOfDayCard} from "./RecipeOfDayCard";
import {Card, Modal} from "@ui-kitten/components";
import {db} from "../firebaseConfig";

const HomeScreen = (props) => {
    let [visible, setVisible] = useState(false);
    let [randomRecipe, setRandomRecipe] = useState();

    const renderItem = ({item}) => (
        <View style={{width: '100%'}}>
            <RecipeOfDayCard user={props.user} item={item}></RecipeOfDayCard>
        </View>
    )

    const getFunky = async () => {
        let response;

        try {
            response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random`, {
                headers: {
                    'X-RapidAPI-Key': 'e88f97dbf0msh4681d08f479894dp1dba02jsn142a43a9e977',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                },
                params: {number: 1}
            }).then((res) => {setRandomRecipe(res.data.results)})
        }
        catch (e) {
            console.log(e.message)
        }
    }

    /*if (show){
        return (
            <SafeAreaView>
                <Text style={{fontSize: 25, textAlign: 'center', marginTop: 20}}>Recipe of the Day</Text>

                <TouchableOpacity onPress={() => funky(props.item.id)}>
                    <Text style={{
                        backgroundColor: '#5fa3ef',
                        paddingVertical: 25,
                        paddingHorizontal: 35,
                        textAlign: 'center',
                        borderRadius: 10,
                        margin: 20
                    }}>Get Daily Recipe</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }*/

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 25, textAlign: 'center', marginTop: 20}}>Recipe of the Day</Text>

                <TouchableOpacity onPress={() => getFunky()}>
                    <Text style={{
                        backgroundColor: '#5fa3ef',
                        paddingVertical: 25,
                        paddingHorizontal: 35,
                        textAlign: 'center',
                        borderRadius: 10,
                        margin: 20
                    }}>Get Daily Recipe</Text>
                </TouchableOpacity>

                <FlatList data={randomRecipe} renderItem={renderItem}></FlatList>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 488,
        minWidth: '100%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        margin: 2,
        width: '100%',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 1,
    },
  });

export {HomeScreen};