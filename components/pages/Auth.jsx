import React, { useState } from 'react'
import {  StyleSheet, View, Text } from 'react-native'
import Card from '../HOC/Card/Card'
import LoginForm from '../Container/loginForm';
import SignupForm from '../Container/SignupForm';
import { colors } from '../../libs/variable';


export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleIsLogin = () =>setIsLogin(!isLogin);

  return (
    <View style={{width:"100%"}}>
        <Card title="bienvenu" content="Veuillez vous authentifiez">
            <Text style={{fontSize:'1.3em'}}>composant potentiel</Text>
            {isLogin ? <LoginForm/> : <SignupForm/>}
            <Text style={styles.link} onPress={toggleIsLogin}>Formulaire</Text>
            {isLogin ? 'pas encore membre? inscrivez-vous' : 'Deja membre? Connectez-vous'}

        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    link:{
        color: colors.primary_2,
        textDecoration: 'underline',
        textDecorationStyle:'solid',
        textDecorationColor: '#000',
        fontWeight: 'bold'
    }
})
