import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{ 
            paddingHorizontal: 15, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: 50 }}>
            <View>
                <Image style={{ height: 30, width: 110,marginLeft:-20 }} source={require('../assets/logo.png')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Activity')} style={{ marginRight: 10,marginTop:-5 }}>
                    <Ionic name="ios-heart-outline" style={{fontSize: 30}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{position:'relative'}}>
                    <Image style={{ height: 21, width: 25 }} source={require('../assets/data/Messanger.png')} />
                    <View style={{position:'absolute',bottom:10,left:13}}> 
                        <Text style={{backgroundColor:'red',paddingHorizontal:5 } }>
                            5
                        </Text>
                    </View>
                    </View>
                   
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})