//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons';
import Bouton from '../ui/Bouton';
import InputWithError from '../ui/inputWithError/inputWithError';

// create a component
const LoginForm = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const handleEmail = (text) => {
    setEmailError("");
    setEmail(text);
};

const handlePassword = (text) => {
    setPasswordError("");
    setPassword(text);
}

const submit = () => {
    if(email.includes("@") && password.length >=6)
    {
        alert("Connexion");
        return;
    }
    setEmailError(!email.includes("@") ? "Email incorrect" : "");
    setPasswordError(password.length < 6 ? "Mot de passe trop court (Minimum 6)" : "");
};


    return (
        <View style={styles.container}>
        {/* //    <TextInput */}
        {/* //    keyboardType="email-address" */}
        {/* //    placeholder="Email" */}
        {/* //    onChangeText={handleEmail} */}
        {/* //    value={email} */}
        {/* //    /> */}
           
        {/* //     <Text>{emailError}</Text> */}

        <InputWithError
          holder="Email"
          valeur={email}
          action={handleEmail}
          errorMessage={emailError}
          type="email-adress"
        />

<InputWithError
          holder="Mot de passe"
          valeur={password}
          action={handlePassword}
          errorMessage={passwordError}
          type="default"
          isPassword
        />


            {/* <TextInput
            placeholder="Mot de passe"
            onChangeText = {handlePassword}
            value={password}
            secureTextEntry={true}
            /> */}
{/* 
            <Text>{passwordError}</Text>
            <TouchableOpacity onPress={submit}>
                <Text>Se connecter</Text>
            </TouchableOpacity> */}

            <Bouton action={submit}>
            <AntDesign name="login" size={24} color="black" />
            <Text>Se connecter</Text>
            </Bouton>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default LoginForm;
