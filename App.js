import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/pages/Auth';
import Profil from './components/pages/Profil';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from '@react-navigation/native';
import ProfilStack from './components/stacks/ProfilStack';

export const UtilisateurContext = createContext();

export default function App() {
  const [user, setUser] = useState();
  
  const getUserFromStorage = async ()=>{
    const localUser = await AsyncStorage.getItem('user');
    if(localUser)
    {
      setUser(JSON.parse(localUser));
    }
  }

  useEffect(()=>{
    getUserFromStorage();
  },[])

  
  return (
    <View style={styles.container}>
      <UtilisateurContext.Provider value={{utilisateur: user, setUtilisateur: setUser}}>
  <NavigationContainer>
  {user ? <ProfilStack/> : <Auth/>}
  </NavigationContainer>
      </UtilisateurContext.Provider>
      
      </View>
  );
}

const styles = StyleSheet.create({

  styleAllTitle: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column'
  },
  container:{
    width:"100%",
    flex:1
  }

});
