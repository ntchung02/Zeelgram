import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsDetails from '../../../components/ReelsDetails';
import { useNavigation } from '@react-navigation/native';
const Reels = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('AddPost')}>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
        </TouchableOpacity>
        
      </View>
      <ReelsDetails/>
    </View>
  );
};

export default Reels;