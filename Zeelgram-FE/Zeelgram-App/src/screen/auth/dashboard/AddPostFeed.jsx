import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { useContext, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import AxiosInstance from "../../../utils/AxiosInstance";
import * as FileSystem from 'expo-file-system';


const AddPostFeed = ({ route }) => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { image_uri } = route.params;
  const [caption, onChangeCaption] = useState("");
  const handlePress = () => {
    navigation.goBack();
  };
  const handleShare = async () => {

    
    const formData = new FormData();
    const localUri = await FileSystem.getInfoAsync(image_uri);

    const file = {
      uri: localUri.uri,
      name: 'aaaa.jpg',
      type: 'image/jpeg',
    };

    formData.append("caption", caption);
    formData.append('media', file);

    try {
      const response = await AxiosInstance.post("/posts/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });
      Alert.alert('Posted successfully!')
      navigation.navigate("Home");
    } catch (error) {
      console.log("erro: ", error);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F2E9E9" }}>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={handlePress}>
          <View style={{ marginLeft: 12, marginTop: 12 }}>
            <Entypo name="chevron-left" size={24} />
          </View>
        </TouchableOpacity>

        <View style={{ width: "100%", marginLeft: -40 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            New Post
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 350, height: 300 }}
            source={{ uri: image_uri }}
          />
        </View>
        <View style={{ width: "100%", height: 120 }}>
          <TextInput
            style={{ fontSize: 16, marginLeft: 17, marginTop: 12 }}
            editable
            placeholder="Viết chú thích..."
            placeholderTextColor="gray"
            onChangeText={onChangeCaption}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>
        <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 12 }}>
          <Entypo name="user" size={24} />
          <Text style={{ marginTop: 3, marginLeft: 12, fontSize: 15 }}>
            Gắn thẻ người khác
          </Text>
          <View style={{ marginLeft: 180 }}>
            <Entypo name="chevron-right" size={24} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 25 }}>
          <Entypo name="eye" size={24} />
          <Text style={{ marginTop: 3, marginLeft: 12, fontSize: 15 }}>
            Đối tượng
          </Text>
          <View style={{ marginLeft: 255 }}>
            <Entypo name="chevron-right" size={24} />
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>
        <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 12 }}>
          <Entypo name="location" size={24} />
          <Text style={{ marginTop: 3, marginLeft: 12, fontSize: 15 }}>
            Thêm vị trí
          </Text>
          <View style={{ marginLeft: 250 }}>
            <Entypo name="chevron-right" size={24} />
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              width: 100,
              height: 30,
              backgroundColor: "gray",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Đà Nẵng
            </Text>
          </View>
          <View
            style={{
              width: 100,
              height: 30,
              backgroundColor: "gray",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Huế
            </Text>
          </View>
          <View
            style={{
              width: 130,
              height: 30,
              backgroundColor: "gray",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Ngũ Hành Sơn
            </Text>
          </View>
          <View
            style={{
              width: 130,
              height: 30,
              backgroundColor: "gray",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Quảng Nam
            </Text>
          </View>
        </ScrollView>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>
        <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 12 }}>
          <Entypo name="music" size={24} />
          <Text style={{ marginTop: 3, marginLeft: 12, fontSize: 15 }}>
            Thêm nhạc
          </Text>
          <View style={{ marginLeft: 245 }}>
            <Entypo name="chevron-right" size={24} />
          </View>
        </View>
      </ScrollView>
      <View style={{ zIndex: 10, paddingBottom: 10, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: "#00CED1",
            width: "90%",
            height: 50,
            marginLeft: 20,
          }}
          onPress={handleShare}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              marginTop: 12,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPostFeed;

const styles = StyleSheet.create({});
