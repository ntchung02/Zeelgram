import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Video, ResizeMode } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReels = ({ item, index, currentIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const videoRef = useRef(null);
    const [mute, setMute] = React.useState(false)
    const [like, setLike] = React.useState(item.like)
    return (
        <View style={{ width: windowWidth, height: windowHeight, position: 'relative' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Video
                    ref={videoRef}
                    source={item.videos}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                    isLooping={true}
                    volume={false}
                    isMuted={mute}
                    paused={currentIndex===index?false:true}
                    shouldPlay
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                />
            </TouchableOpacity>
            <View style={{ position: 'absolute', width: windowWidth, zIndex: 1, bottom: 80, padding: 10 }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150, }}>
                        <View style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 32, height: 32, borderRadius: 100, backgroundColor: 'white', margin: 10 }}>

                                <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }} source={item.postProfile} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16,width:200 }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Ionic
                            name="ios-musical-note"
                            style={{ color: 'white', fontSize: 16 }}
                        />
                        <Text style={{ color: 'white' }}>Original Audio</Text>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 100, right: 0, flexDirection: 'column' }}>
                <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
                    <AntDesign name={like ? "heart" : "hearto"} style={{ color: like ? 'red' : 'white', fontSize: 25 }} />
                    <Text style={{color:'white'}}>{item.like}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionic name="ios-chatbubble-outline" style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionic name="paper-plane-outline" style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Feather name="more-vertical" style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>
                <View style={{width:30,height:30,borderRadius:10,borderWidth:2,borderColor:'white',margin:10}}>
                    <Image style={{width:'100%',height:'100%',borderRadius:10,resizeMode:'cover'}} source={item.postProfile} />
                </View>
            </View>
        </View>
    );
};

export default SingleReels;
