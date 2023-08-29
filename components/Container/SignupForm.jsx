//import liraries
import React, { Component, useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons';
import Bouton from '../ui/Bouton';
import InputWithError from '../ui/inputWithError/inputWithError';

// create a component
function SignupForm(){
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [userName, setuserName] = useState("");


const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const [userNameError, setUserNameError] = useState("");


const handleEmail = (text) => {
    setEmailError("");
    setEmail(text);
};

const handlePassword = (text) => {
    setPasswordError("");
    setPassword(text);
}


const handleUserName= (text) => {
    setUserNameError("");
    setPassword(text);
}


const handleConfirmPassword= (text) => {
    setUserNameError("");
    setPassword(text);
}


const submit = () => {
    if(email.includes("@") && password.length >=6 && userName.length>=3 && userName.length<13 &&  confirmPassword === password)
    {
        alert("Inscription réussie");
        return;
    }
    setEmailError(!email.includes("@") ? "Email incorrect" : "");
    setPasswordError(password.length < 6 ? "Mot de passe trop court (Minimum 6)" : "");
    setUserNameError(userName.length <3 || userName.length>13 ? "Username incorrect" : "");
    setConfirmPasswordError(confirmPassword !== password ? "le mot de passe ne sont pas les même" : "");

};
    return (
        <View style={styles.container}>
            
        <InputWithError
          holder="Email"
          valeur={email}
          action={handleEmail}
          errorMessage={emailError}
          type="email-adress"
        />

<InputWithError
          holder="username"
          valeur={userName}
          action={handleUserName}
          errorMessage={userNameError}
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

        
<InputWithError
          holder="Confirm mot de passe"
          valeur={password}
          action={handleConfirmPassword}
          errorMessage={confirmPasswordError}
          type="default"
          isPassword
        />


<Bouton action={submit}>
            {/* <AntDesign name="login" size={24} color="black" /> */}
            <Text>Inscription</Text>
            </Bouton>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default SignupForm;
