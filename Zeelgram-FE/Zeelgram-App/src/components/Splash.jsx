import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(()=>{
        navigation.navigate('Login');
      },3000)
    }, [])
    
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:"center",borderRadius:10,backgroundColor:"#F2E9E9"}}>
            <Animatable.Image duration={2000} animation="zoomIn" style={{ height: 400, width: 450,marginLeft:-20 }} source={require('../assets/logo.png')} />
            <View style={{marginTop:40}}>
            <Animatable.Text duration={2000} animation="zoomIn" style={{textAlign:'center',fontSize:12,marginTop:10}}>From by</Animatable.Text>
            <Animatable.Text duration={2000} animation="fadeInDown" style={{fontSize:15,fontWeight:500,marginTop:5}}>Carey & Lin</Animatable.Text>
            </View>
        </View >
    )
}

export default Splash

const styles = StyleSheet.create({})