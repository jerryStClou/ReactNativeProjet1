//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext, useState } from "react";
import InputWithError from '../ui/inputWithError/inputWithError';
import Bouton from '../ui/Bouton';
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../libs/variable";
import { UtilisateurContext } from "../../App";
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const Modif = () => {
	// Créer les variables
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");



	// Créer les fonction qui s'executent quand l'utilisateur tape dans les champs
	const handleEmail = (text) => {
		setEmailError("");
		setEmail(text);
	};
	const handleUsername = (text) => {
		setUsernameError("");
		setUsername(text);
	};
	const handlePassword = (text) => {
		setPasswordError("");
		setPassword(text);
	};
	const handleConfirmPassword = (text) => {
		setConfirmPasswordError("");
		setConfirmPassword(text);
	};

	// Fonction qui s'execute quand l'utilisateur submit
	const submit = async () => {
		if (
			email.includes("@") &&
			username.length >= 3 &&
			username.length < 12 &&
			password.length >= 6 &&
			password === confirmPassword
		) {
			// Envoyer une requete vers la backend
            await AsyncStorage.setItem(
                "user",
                JSON.stringify({email:email, username:username})
            );
			objet.setUtilisateur({email: email, username: username})
			return;
		}
		setEmailError(!email.includes("@") ? "Email incorrect" : "");
		setUsernameError(
			username.length < 3 || username.length > 12
				? "username incorrect (Max. 12, min. 3)"
				: ""
		);
		setPasswordError(password.length < 6 ? "Mot de passe trop court" : "");

		setConfirmPasswordError(
			password !== confirmPassword ? "Les mots ne sont pas identiques" : ""
		);
	};

    return (
        <View style={styles.container}>
            <View>
              {/* <Text>Modifier</Text> */}
              {/* <Text>vos informations</Text> */}
            </View>
            <InputWithError
				valeur={email}
				action={handleEmail}
				type={"email-address"}
				holder={"Entrez un email"}
				errorMessage={emailError}
			/>
			<InputWithError
				valeur={username}
				action={handleUsername}
				type={"email-address"}
				holder={"Entrez un pseudo"}
				errorMessage={usernameError}
			/>
			<InputWithError
				valeur={password}
				action={handlePassword}
				type={"default"}
				holder={"Entrez un mot de passe"}
				errorMessage={passwordError}
				isPassword
			/>
			<InputWithError
				valeur={confirmPassword}
				action={handleConfirmPassword}
				type={"default"}
				holder={"Confirmez mot de passe"}
				errorMessage={confirmPasswordError}
				isPassword
			/>
            <Bouton action={submit}>
				<AntDesign name="login" size={24} color={colors.light_4} />
				<Text style={{color: colors.light_4}} >Enregistrer</Text>
			</Bouton>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default Modif;
