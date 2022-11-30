import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import {firebase} from "./firebaseConfig";
import User from "./Models/User";
import {useEffect, useState} from "react";
import {TabThingy} from "./components/tabthingy";



export default function App() {
    let [user, setUser] = useState(null);

    let getUser = async () => {
        await firebase.auth().onAuthStateChanged(x => {
            if (x) {
                setUser(new User(x))
            } else {
                setUser(null)
            }
        })
    }

    useEffect(() => {
        getUser()
    }, [])

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
       <TabThingy user={user} getUser={getUser} />
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
