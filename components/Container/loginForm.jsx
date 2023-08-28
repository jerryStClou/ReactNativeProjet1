//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

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
           <TextInput
           keyboardType="email-address"
           placeholder="Email"
           onChangeText={handleEmail}
           value={email}
           />
           
            <Text>{emailError}</Text>
            <TextInput
            placeholder="Mot de passe"
            onChangeText = {handlePassword}
            value={password}
            secureTextEntry={true}
            />

            <Text>{passwordError}</Text>
            <TouchableOpacity onPress={submit}>
                <Text>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default LoginForm;
