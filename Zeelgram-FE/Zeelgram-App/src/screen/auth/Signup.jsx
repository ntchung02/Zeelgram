import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Formik } from "formik";
import { signupInitialValue, signupValidationSchema } from "./utils";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AxiosInstance from "../../utils/AxiosInstance";

const Signup = () => {
  const navigation = useNavigation();
  const handleSignup = async (values) => {
    try {
      const res = await AxiosInstance.post("/auth/signup", {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      });
      if (res.status === 201) {
        navigation.navigate("Login");
      } else {
        navigation.navigate("Signup");
      }
    } catch (error) {
        if (error.response.status === 401) {
            console.error("Authentication failed:", error);
          } else {
            console.error("Signup failed:", error);
          }
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#F2E9E9" }}>
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: 300,
            height: 100,
            alignSelf: "center",
            marginBottom: 40,
          }}
        />
        <Formik
          initialValues={signupInitialValue}
          onSubmit={(values) => handleSignup(values)}
          validationSchema={signupValidationSchema}
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
                  placeholder={"Username"}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                />
                <InputBox
                  name="name"
                  placeholder={"Name"}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  touched={touched.name}
                  errors={errors.name}
                />
                <InputBox
                  placeholder={"Email"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  touched={touched.email}
                  errors={errors.email}
                  maxLength={50}
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
                  buttonTitle={"Sign up"}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={{ flex: 0.2, marginBottom: 20, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
