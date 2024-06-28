import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useRef } from "react";
import { Formik } from "formik";
import { loginInitialValue, loginValidationSchema } from "./utils";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import AxiosInstance from "../../utils/AxiosInstance";

const Login = () => {
  const navigation = useNavigation();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = async (values) => {
    try {
      const res = await AxiosInstance.post("/auth/signin", {
        username: values.username,
        password: values.password,
      });

      const { message, status, ...other } = res.data;

      if (res.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", payload: other });
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Login");
      }
    } catch (Error) {
      console.error("Login failed:", Error);
      navigation.navigate("Login");
  };
}

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#F2E9E9" }}>
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: 300,
            height: 100,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <Formik
          initialValues={loginInitialValue}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={loginValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View>
                <InputBox
                  name="username"
                  placeholder={"Username, email address"}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                />
                <InputBox
                  placeholder={"Password"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  secureTextEntry={true}
                />
                <CustomButton
                  buttonTitle={"Login"}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
        <View
          style={{
            flex: 0.1,
            marginBottom: 20,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: "grey", fontSize: 16, marginTop: -12 }}>
              Forgotten Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{ marginBottom: 20, alignSelf: "center" }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ color: "grey", fontSize: 16 }}>
            Create a new account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
