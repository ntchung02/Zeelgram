import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import ButtonCamera from '../../components/ButtonCamera';
import { useNavigation } from '@react-navigation/native';


const AddPost = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.backgroundColor);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, [])

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri)
      } catch (e) {
        console.log(e);
      }
    }
  }
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        Alert.alert('Picture save!')
        setImage(null)
      } catch (e) {
        console.log(e);
      }
    }
  }
  if (hasCameraPermission === false) {
    return <Text>No accesss to camera</Text>
  }
  return (
    <View style={styles.container}>
      {!image ?
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30
          }}>
          </View>
        </Camera>
        :
        <View style={styles.container}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            zIndex: 100
          }}>
            <ButtonCamera icon="retweet" onPress={() => setImage(null)} />
            <ButtonCamera icon={'flash'} color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'} onPress={() => {
              setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
            }} />
          </View>
          <Image source={{ uri: image }} style={styles.camera} />
        </View>
      }

      <View>
        {image ?
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 50
          }}>
            <ButtonCamera title={"Save"} icon="check" onPress={saveImage} />
            <ButtonCamera title={"Continue"} icon="arrow-right" onPress={()=> navigation.navigate('AddNewPost',{
              image_uri:image
            })} />
          </View>
          : <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <View style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 2, borderColor: 'white', margin: 10,marginLeft:20 }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 10, resizeMode: 'cover' }} source={require('../../assets/data/z4936286477082_767a0f72c5aed430b98a725920bfb649.jpg')} />
              </View>
            </TouchableOpacity>
           <View style={{marginTop:15,marginLeft:110}}>
           <ButtonCamera  icon="camera" onPress={takePicture}></ButtonCamera>
           </View>
           <View style={{marginTop:15,marginLeft:130}}>
           <ButtonCamera icon={'retweet'} onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back)
            }} />
           </View>
           
          </View>
        }

      </View>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 10,

  },
  camera: {
    flex: 1,
    borderRadius: 20,

  }
})