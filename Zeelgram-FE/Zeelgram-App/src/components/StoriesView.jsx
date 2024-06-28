import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const StoriesView = ({ route }) => {
    const selectedItems = route.params.item
    const navigation = useNavigation()
    const currentTime = new Date();
    const currentHr = currentTime.getHours();
    const storyTime = currentHr - selectedItems.story.time;
    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.goBack();
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 12,
                    paddingLeft: 12,
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 10
                    }} source={selectedItems.profile} />
                <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{selectedItems.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 10, color: 'white' }}>{storyTime}hr</Text>
            </View>
            <View style={{ position: 'absolute' }}>
                <Image
                    style={{
                        width: screenWidth,
                        height: screenHeight - 100,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15
                    }} source={selectedItems.story.image} />
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: 'white', width: 300,
                            paddingHorizontal: 15, color: 'white', borderRadius: 30, marginHorizontal: 30
                        }}
                        placeholder='Message'
                        placeholderTextColor={"white"}
                    />
                    <TouchableOpacity>
                        <Image style={{ tintColor: 'white', marginRight: 10 }} source={require('../assets/data/Messanger.png')} />
                    </TouchableOpacity>



                </View>

            </View>
        </View>
    )
}

export default StoriesView

const styles = StyleSheet.create({})