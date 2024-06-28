import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({onChangeText,placeholder,onBlur,value,touched,secureTextEntry,keyboardType,maxLength,errors}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        touched={touched}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}/>
         {errors && touched && <Text style={{color:'red',paddingLeft:5}}>{errors}</Text>}
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    mainContainer:{
      height:68,
      //backgroundColor:'red'
    },
    textInput:{
      borderWidth:1,
      width:350,
      height:40,
      borderColor:'grey',
      borderRadius:5,
      paddingHorizontal:10

        
    }
})