import React, {useState} from 'react';

import {Button, Card, Modal, Text} from '@ui-kitten/components'
import {db} from "../firebaseConfig";
import {FlatList, ScrollView, View, StyleSheet, Image} from "react-native";
import axios from "axios";

const SavedRecipeCard = (props) => {
    const [visible, setVisible] = React.useState(false);
    let [ingredient, setIngredients] = useState();
    let [instruction, setInstructions] = useState();
    let [instructionsShown, setInstructionsShown] = useState(false);

    let removeRecipe = async () => {
        await db
            .collection('users')
            .doc(props.user.uid)
            .collection('saved')
            .doc(props.item.id)
            .delete();
        await props.getCards();
    };

    let funk = (id) => {
        setVisible(true)

        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`, {
            headers: {
                "X-RapidAPI-Key": "e88f97dbf0msh4681d08f479894dp1dba02jsn142a43a9e977",
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            },
        })
            .then((res) => {
                setIngredients(res.data.ingredients)
            })
    }

    let mega_funk = (id) => {
        setInstructionsShown(true)

        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
            headers: {
                "X-RapidAPI-Key": "e88f97dbf0msh4681d08f479894dp1dba02jsn142a43a9e977",
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            },
        }).then((res) => {
            setInstructions(res.data.instructions)
        })
    }

    const renderIngredient = ({item}) => (
        <View style={{flexDirection: 'row'}}>
            <Text>{item.name} | </Text>
            <Text>{item.amount.us.value} {item.amount.us.unit}</Text>
        </View>
    )

    return (
        <View style={{width: '100%'}}>
            <Card style={styles.card}>
                <View>
                    <Text style={{textAlign: 'center'}} category='h4'>{props.item.data().title}</Text>
                </View>

                <Image resizeMethod={'scale'} source={{uri: `${props.item.data().image}`}}/>

                {instructionsShown ? <ScrollView><Text>{instruction}</Text></ScrollView> : null}

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>{!instructionsShown ?
                    <Button onPress={() => mega_funk(props.item.data().id)}>Show Instructions</Button> :
                    <Button onPress={() => setInstructionsShown(false)}>Hide Instructions</Button>}
                    <Button onPress={() => funk(props.item.data().id)} style={styles.footerControl}>Show Ingredients</Button>
                    <Button onPress={() => removeRecipe()}>Delete Recipe</Button>
                </View>
            </Card>

            <View>
                <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <FlatList data={ingredient} renderItem={renderIngredient}/>
                        <Button onPress={() => setVisible(false)}>Dismiss</Button>
                    </Card>
                </Modal>
            </View>
        </View>
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
        width: '100%'
    },

})

export {SavedRecipeCard};