//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import Profil from "../pages/Profil";
import Cam from "../pages/Cam"
import { colors } from '../../libs/variable';
import Modif from '../Container/Modif';

// create a component

const Stack = createStackNavigator();

const ProfilStack = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
                backgroundColor:colors.primary_1,
            },
            headerTitleStyle:{
                color:colors.light_4
            },
            headerTintColor:colors.light_4
          }
          }
        >
            <Stack.Screen name="profil" component={Profil} 
              options={{title: "Page de profil"}}
            />
            <Stack.Screen name="camera" component={Cam}
               options={{
                title: "Prenez une photo"
               }}
            />
            <Stack.Screen name="modif" component={Modif}
               options={{
                title: "Modifier vos informations"
               }}/>
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default ProfilStack;
