import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
    const navigation = useNavigation();
  return (
    <ScrollView horizontal style={{flexDirection:'row',marginTop:8}}>
     {UserData.map((item,index)=>{
        console.log(item);
        return(
            <View style={{marginLeft:10}}  key={index}>
                <TouchableOpacity onPress={()=>navigation.navigate('Story',{item})}>
                    <View style={{borderWidth:3,borderRadius:40,padding:2}}>
                        <Image style={{width:70,height:70,borderRadius:35}} source={item.story.image} />
                    </View>
                </TouchableOpacity>
            </View>
        )
     })}
    </ScrollView>
  )
}

export default Stories

const styles = StyleSheet.create({})