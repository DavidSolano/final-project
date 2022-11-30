import React, {useEffect, useState} from 'react'

import {Text, StyleSheet, View, ScrollView, TouchableOpacity} from "react-native"
import axios from "axios";
import {RecipeOfDayCard} from "./RecipeOfDayCard";

const HomeScreen = (props) => {
    let [visible, setVisible] = useState(false);
    let [randomRecipe, setRandomRecipe] = useState();
    let [errorThing, setErrorThing] = useState(false);

    const getFunky = async () => {
        setVisible(false)
        let response;
        let searchStuffThingy = {number: '1'}
        try {
            response = await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random', {
                headers: {
                    'X-RapidAPI-Key': 'e88f97dbf0msh4681d08f479894dp1dba02jsn142a43a9e977',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                },

            }).then((res) => {
                setRandomRecipe(res.data.recipes[0])
                setVisible(true)
            })
        }
        catch (e) {
            setErrorThing(true)
        }
    }

    useEffect(() => {
        getFunky()
    },[])

    if (visible){
        return(
            <ScrollView>
                <View>
                    <Text style={{fontSize: 25, textAlign: 'center', marginTop: 20}}>Recipe of the Day</Text>

                    <TouchableOpacity onPress={() => {getFunky()}}>
                        <Text style={{
                            backgroundColor: '#5fa3ef',
                            paddingVertical: 25,
                            paddingHorizontal: 35,
                            textAlign: 'center',
                            borderRadius: 10,
                            margin: 20
                        }}>Get Daily Recipe</Text>
                    </TouchableOpacity>

                    <RecipeOfDayCard user={props.user} item={randomRecipe}></RecipeOfDayCard>
                </View>
            </ScrollView>
        )
    } else if (errorThing){
        return (
            <Text>Error loading data :(</Text>
        )
    } else {
        return(
            <ScrollView>
                <Text>loading ...</Text>
            </ScrollView>
        )
    }
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

export {HomeScreen}