import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../utils/axiosConfig";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("Zeelgram"));
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const res = await instance.post("/auth/login", data);
      if (res.data) {
        setUser(res.data.username);
        setToken(res.data.token);
        localStorage.setItem("Zeelgram", res.data.token);
        navigate("/");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  const signupAction = async (data) => {
    try {
      const response = await instance.post("auth/signup", data);
      // const res = await response.json();
      // if (res.data) {
      //   setUser(res.data.user);
      //   setToken(res.token);
      //   localStorage.setItem("site", res.token);
      //   navigate("/login");
      //   return;
      // }
      // throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmationCode = async (data) => {
    try {
      const tokenParam = encodeURIComponent(data); // Encode token value
      const response = await instance.get(`auth/confirm?token=${tokenParam}`);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, logOut, signupAction, confirmationCode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
