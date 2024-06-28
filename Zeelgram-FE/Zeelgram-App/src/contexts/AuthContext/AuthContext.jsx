import { createContext, useEffect, useReducer } from "react";


  const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return { user: action.payload, error: false };
      // Add more cases if needed
      default:
        return state;
    }
  };
  
  export const AuthContext = createContext();
  
  export const AuthContextProvider = ({ children }) => {
    const INITIAL_STATE = { user: null, error: null };
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
    return (
      <AuthContext.Provider value={{ user: state.user, error: state.error, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };
  