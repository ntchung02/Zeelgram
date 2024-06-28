import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { UserData } from '../utils/UserData';
import { videoData } from '../utils/VideoData';
import { ResizeMode } from 'expo-av';

const BottomTabView = (props) => {
    const { posts } = props;
    const Tab = createMaterialTopTabNavigator();
    const videoRef = useRef(null);
    let squares = [];
    let numberOfSquare = 7;

    for (let index = 0; index < numberOfSquare; index++) {
        squares.push(
            <View key={index}>
                <View
                    style={{
                        width: 130,
                        height: 150,
                        marginVertical: 0.5,
                        backgroundColor: 'black',
                        opacity: 0.1,
                    }}></View>
            </View>,
        );
    }
console.log("aaa", posts);
    const Posts = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                    {posts.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={{ paddingBottom: 2, width: '33%' }}>
                                <Image
                                    source={{uri: item.media}}
                                    style={{ width: '100%', height: 150 }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };
    // const Video = () => {
    //     return (
    //         <ScrollView
    //             showsVerticalScrollIndicator={false}
    //             style={{
    //                 width: '100%',
    //                 height: '100%',
    //             }}>
    //             <View
    //                 style={{
    //                     width: '100%',
    //                     height: '100%',
    //                     backgroundColor: 'white',
    //                     flexWrap: 'wrap',
    //                     flexDirection: 'row',
    //                     paddingVertical: 5,
    //                     justifyContent: 'space-between',
    //                 }}>
    //                 {videoData.map((item, index) => {
    //                     return (
    //                         <TouchableOpacity
    //                             key={index}
    //                             style={{ paddingBottom: 2, width: '33%' }}>
    //                             <Video
    //                                 ref={videoRef}
    //                                 source={item.videos}
    //                                 useNativeControls
    //                                 resizeMode={ResizeMode.COVER}
    //                                 isLooping={true}
    //                                 volume={false}
    //                                 shouldPlay
    //                                 style={{ width: '100%', height: 150, position: 'absolute' }}
    //                             />
    //                         </TouchableOpacity>
    //                     );
    //                 })}
    //             </View>
    //         </ScrollView>
    //     );
    // };
    const Video = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>

                                {/* <Video
                                    ref={videoRef}
                                    source={{
                                        uri: 'https://www.pexels.com/video/scenic-video-of-sunset-4678261/',
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.COVER}
                                    isLooping
                                    style={{ width: 100, height: 10 }}
                                /> */}
                  
                </View>
            </ScrollView>
        );
    };
    const Tags = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                {UserData.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'white',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                paddingVertical: 5,
                                justifyContent: 'space-between',
                            }}>
                            {UserData.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{ paddingBottom: 2, width: '33%' }}>
                                        <Image
                                            source={item.post.image}
                                            style={{ width: '100%', height: 150 }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    )
                })}

            </ScrollView>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === 'Posts') {
                        iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Video') {
                        iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Tags') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                        colour = focused ? 'black' : 'gray';
                    }

                    return <Ionic name={iconName} color={colour} size={22} />;
                },
            })}>
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Tags" component={Tags} />
        </Tab.Navigator>
    );
};

export default BottomTabView;