import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import Stories from '../../../components/Stories'
import Post from '../../../components/Post'

const Dashboard = () => {
    return (
        <ScrollView style={{ flex: 1,backgroundColor:"#F2E9E9" }}>
           <Header/>
           <Stories/>
           <Post/>
        </ScrollView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})