import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { useContext, useEffect, useRef, useState } from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from './BottomTabView';
import { ProfileBody, ProfileButtons } from './ProfileBody';
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import AxiosInstance from "../utils/AxiosInstance";

const ProfileScreen = () => {

  const initialUserProfile = {
    username: '',
    displayName: '',
    userProfile: {
      profilePictureUrl: '',
      displayName: ''
    },
    followers: [],
    followings: [],
    // Other properties with initial values
  };

  const initialUserPost = [
    {
      id: '',
      media: ''
    }
  ]

  let circuls = [];
  let numberofcircels = 10;

  const [userProfile, setUserProfile] = useState(initialUserProfile)
  const [posts, setPosts] = useState(initialUserPost)

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await AxiosInstance.get(`/${user.username}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setUserProfile(response.data); // Update posts state with fetched data
        } catch (error) {
        }
    };

    const fetchPosts = async () => {
      try {
          const response = await AxiosInstance.get(`/posts/user/${user.username}`, {
              headers: {
                  Authorization: `Bearer ${user.token}`,
              },
          });
          setPosts(response.data);
      } catch (error) {
          console.error("Request failed:", error);
      }
  };
    fetchUser();
    fetchPosts();
}, []);
  

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name={userProfile.userProfile.displayName}
          accountName={userProfile.username}
          profileImage={{ uri: userProfile.userProfile.profilePictureUrl }}
          followers={userProfile.followers === null ? 0 : userProfile.followers.length}
          following={userProfile.followings === null ? 0 : userProfile.followings.length}
          post={posts.length}
        />
        <ProfileButtons
          id={0}
          name={userProfile.userProfile.displayName}
          accountName={userProfile.username}
          profileImage={{uri: userProfile.userProfile.profilePictureUrl}}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      {posts && <BottomTabView posts={posts}/>}
    </View>
  );
};

export default ProfileScreen;