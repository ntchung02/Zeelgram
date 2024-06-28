import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
const ButtonCamera = ({title,onPress,icon,color}) => {
  return (
  <TouchableOpacity onPress={onPress} style={styles.button}>
     <Text style={styles.text}>{title}</Text>
    <Entypo style={{marginLeft:12}} name={icon} size={28} color={color?color:'#f1f1f1'} />
   
  </TouchableOpacity>
  )
}

export default ButtonCamera

const styles = StyleSheet.create({
    button:{
       height:40,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:'#f1f1f1',
    }
})