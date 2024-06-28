import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screen/auth/Login'
import Signup from '../screen/auth/Signup'
import Dashboard from '../screen/auth/dashboard/Dashboard'
import Header from '../components/Header'
import StoriesView from '../components/StoriesView'
import BottomNavigation from './BottomNavigation'
import Splash from '../components/Splash'
import ActivityScreen from '../components/ActivityScreen'
import FriendProfile from '../components/FriendProfile'
import EditProfile from '../components/EditProfile'
import AddPostFeed from '../screen/auth/dashboard/AddPostFeed'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Activity' component={ActivityScreen}/>
        <Stack.Screen name='FriendProfile' component={FriendProfile}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Home' component={Dashboard}/>
        <Stack.Screen name='Story' component={StoriesView}/>
        <Stack.Screen name='AddNewPost' component={AddPostFeed}/>
        <Stack.Screen name='Dashboard' component={BottomNavigation}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})