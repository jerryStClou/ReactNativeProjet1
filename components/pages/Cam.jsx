//import liraries
import { Camera, CameraType } from 'expo-camera';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { UtilisateurContext } from '../../App';
// create a component
const Cam = (props) => {
    const [permission, demanderPermission] = Camera.useCameraPermissions();
    console.log(permission);
    const size = useWindowDimensions();
    const [cameraType, setCameraType] = useState(CameraType.back);
    const cameraRef = useRef();
    const toggleCamera = () =>{
        setCameraType(cameraType == CameraType.back ? CameraType.front : CameraType.back);
    };



useEffect(() =>{
    if(permission && permission.status == "undetermined"){
        demanderPermission();
    }
});

// const objet = useContext(UtilisateurContext);

// const prendrePhoto = async () => {
//     // Acceder au composant Camera pour utiliser takePictureAsync
//     const resultat = await cameraRef.current.takePictureAsync();
//     // console.log(resultat);
//     objet.setUtilisateur({...objet.utilisateur,avatar:resultat});
//     props.navigation.goBack();
// };






if(permission && permission.granted == false)
{
    return <Text>Vous n'avez accepter l'utilisation de la camera</Text>
}
    return (
        <View style={styles.container}>
            <Camera 
            ratio='16:9' 
            style={{width: size.width, height: (size.width * 16) / 9}}
            ref={cameraRef}
            >
            <View style={styles.buttons}>
                <Pressable onPress={prendrePhoto}>
                     <MaterialIcons name="camera" size={42} color="red"  />
                </Pressable>
                <Pressable onPress={toggleCamera}>
                    <MaterialIcons name='flip-camera-android' size={42} color="green" onPress={isFront}/>
                </Pressable>
            </View>
            </Camera>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%'
    },
    buttons: {
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        bottom:100,
        margin:'auto',
        alignSelf:'center',
        gap:50
    },
});

//make this component available to the app
export default Cam;
