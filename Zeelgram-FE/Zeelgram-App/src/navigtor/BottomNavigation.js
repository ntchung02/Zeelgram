import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screen/auth/dashboard/Dashboard'
import Search from '../screen/auth/dashboard/Search'
import AddPost from '../screen/auth/AddPost'
import Reels from '../screen/auth/dashboard/Reels'
import UserPofile from '../screen/auth/dashboard/UserPofile'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
            <Tab.Screen
                name='Home'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={
                                focused
                                    ? require('../assets/data/sHomeButton.png')
                                    : require('../assets/data/homeButton.png')
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen name='Search' component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={
                                focused
                                    ? require('../assets/data/sSearch.png')
                                    : require('../assets/data/search.png')
                            }
                        />
                    ),
                }} />
            <Tab.Screen name='AddPost' component={AddPost}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={
                                require('../assets/data/addPost.png')
                            }
                        />
                    ),
                }} />
            <Tab.Screen name='Reels' component={Reels}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={
                                require('../assets/data/reel.png')
                            }
                        />
                    ),
                }} />
            <Tab.Screen name='UserProfile' component={UserPofile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={
                                require('../assets/data/user.png')
                            }
                        />
                    ),
                }} />

        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})