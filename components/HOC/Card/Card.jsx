import React from 'react'
import {  StyleSheet, View, Text } from 'react-native'
import { colors } from '../../../libs/variable';

export default function Card({title,content,children}) {
  return (
    <View style={styles.container}>
        <View style={styles.styleAllTitle}>
          <Text style={styles.styleTitle}>{title}</Text>
          <Text style={styles.styleSousTitle}>{content}</Text>
        </View>
        <View style={styles.styleChildren}>
            {children}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
    maxWidth:'400px',
    margin:"auto"
  },

    styleAllTitle: {
        backgroundColor: colors.primary_2,
        width: "100%",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    },
    styleTitle:{
        color: 'whitesmoke',
        fontSize: 30,
         textAlign:'center'
    },
    styleSousTitle:{
        color: colors.light_4,
        textAlign:'center'
    },
    styleContent:{
        margin:10
    },
    styleChildren: {
        backgroundColor:'whitesmoke',
        padding: 10,
    }
  
  });