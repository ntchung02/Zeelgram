import {
  Dimensions,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import AxiosInstance from "../utils/AxiosInstance";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useNavigation } from "@react-navigation/native";
const Post = () => {
  const screenWidth = Dimensions.get("window").width;
  const [like, setLike] = useState(false);
  const [posts, setPosts] = useState(null);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await AxiosInstance.get("/posts/all", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setPosts(response.data); // Update posts state with fetched data
        setTimeout(() => {
          setIsLoading(false); // Set loading to false after a delay
        }, 3000)
      } catch (error) {
        console.error("Request failed:", error);
      } 
    };

    fetchPosts();
  });

  if (isLoading) {
      return (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      );
  }

  return (
    posts && (
      <View style={{ marginTop: 2 }}>
        {posts.map((item) => {
          return (
            <View style={{ marginTop: 10 }} key={item.id}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  marginBottom: 8,
                }}
              >
                <Image
                  style={{ height: 30, width: 30, borderRadius: 15 }}
                  source={{ uri: item.user.userProfile.profilePictureUrl }}
                />
                <Text
                  style={{
                    paddingLeft: 10,
                    fontSize: 16,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {item.user.username}
                </Text>
              </View>
              <View>
                <Image
                  style={{ width: screenWidth, height: 400 }}
                  source={{ uri: item.media }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => setLike(!like)}
                  style={{ padding: 5 }}
                >
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{ color: like ? "red" : "black", fontSize: 25 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ color: "black", fontSize: 25 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}>
                  <Ionic
                    name="paper-plane-outline"
                    style={{ color: "black", fontSize: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 1,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                {/* {item.post.like} likes */}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: 500,
                    marginRight: 10,
                  }}
                >
                  {item.user.username}
                </Text>
                <Text style={{ color: "black" }}>{item.caption}</Text>
              </View>
            </View>
          );
        })}
      </View>
    )
  );
};

export default Post;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
