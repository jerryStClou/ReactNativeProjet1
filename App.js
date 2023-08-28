import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/pages/Auth';
import Profil from './components/pages/Profil';


export default function App() {
  const [user, setUser] = useState();
  return (
    <View style={styles.container}>
      {user ? <Profil/> : <Auth/>}
      
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
    width:"100%"
  }

});
