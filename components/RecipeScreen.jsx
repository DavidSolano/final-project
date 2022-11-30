import React, {useEffect, useState} from 'react';
import {
    Button,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from "react-native";
import {RecipeCard} from "./RecipeCards";
import {SavedRecipeCard} from "./SavedRecipeCard";
import {db} from "../firebaseConfig";
import {useIsFocused} from "@react-navigation/native";

let RecipeScreen = (props) => {
    const isFocused = useIsFocused();

    let [currentList, setCurrentList] = useState([]);
    let [visible, setVisible] = useState(false);

    let getCards = async () => {
        let watchlistStuff = await db
            .collection("users")
            .doc(props.user.uid)
            .collection("saved")
            .get()
            .then((yo) => {
                return yo.docs;
            });
        let tempArray = watchlistStuff.map((doc) => doc);
        setCurrentList(tempArray)

    };

    useEffect(() => {
        getCards();
    }, [isFocused]);

    let renderSavedCards = ({ item }) => {
        return(
            <View>
                <SavedRecipeCard getCards={getCards} user={props.user} item={item}></SavedRecipeCard>
            </View>
        )
    }

    if (visible){
        return (
            <Image
                style={{alignContent: 'center', justifyContent: 'center'}}
                source={require("../images/no_recipes.jpg")}
            />
        )
    } else {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Saved Recipes</Text>
                </View>

                <View>
                    <ScrollView>
                        <Text></Text>
                        <FlatList data={currentList} renderItem={renderSavedCards}></FlatList>
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
});

export {RecipeScreen};