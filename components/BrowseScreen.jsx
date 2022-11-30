import React, {useState} from 'react';
import axios from 'axios';
import {Button, StyleSheet, FlatList, View, Image} from "react-native";
import { SearchBarThing } from './SearchBarThing';
import {RecipeCard} from "./RecipeCards";


let BrowseScreen = (props) => {

    let [recipes, setRecipes] = useState();
    let [visible, setVisible] = useState(false);
    let [search, setSearch] = useState('');

    const baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch'

    const renderItem = ({ item }) => (
        <View style={{width: '100%'}}>
            <RecipeCard user={props.user} item={item}></RecipeCard>
        </View>
    );


    const getRecipes = async () => {
        let response;
        if (search !== ''){
            let searchmabob = {query: search}
            try {
                response = await axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",{
                    headers:{
                        "X-RapidAPI-Key": "e88f97dbf0msh4681d08f479894dp1dba02jsn142a43a9e977",
                        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                    },
                    params: searchmabob
                }).then((res) => {setRecipes(res.data.results)});
            }
            catch (ex){
                console.log(ex.message)
            }
        }
    }

    return(
        <View style={styles.container}>
            <SearchBarThing search={search} setSearch={setSearch}></SearchBarThing>
            <Button title={'Search'} onPress={() => {getRecipes()}}></Button>

            <FlatList data={recipes} renderItem={renderItem}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%'
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
    },
    cardthingy:{
        backgroundColor:'#FFF',
        borderRadius: 12
    },
});

export {BrowseScreen};