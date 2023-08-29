import {StyleSheet, TextInput, View,Text } from "react-native-web";
import { Feather } from '@expo/vector-icons';
// import { colors } from "../../libs/variable";
import { useState } from "react";
import { colors } from "../../../libs/variable";

export default function InputWithError({holder, valeur, action, errorMessage, type, isPassword})
{
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    return(
        <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder={holder} value={valeur} onChangeText={action} keyboardType={type} secureTextEntry={isPassword && !isPasswordVisible}></TextInput>
        {isPassword ? (<Feather onPress={togglePassword} name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" />) : null }
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {},
    inputContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: "white",
        margin:10,
        padding:10,
        borderRadius:5,
        borderBottomColor: colors.primary_4,
        borderBottomWidth:2
    },
    error:{
        color:'red',
        margin:10,
    }

});