import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const authContext = createContext({
  userInfo:null,
  signUp:()=>{},
  logout:()=>{},
});

export function AuthContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const login=async(data)=>{
    // const temp=await axios.get(""?email)
  }

  const logout=()=>{
    setUserInfo(null);
  }

  const signUp=async(data)=>{
    setUserInfo(data);
  }






  return (
    <authContext.Provider
      value={{
        signUp,
        userInfo,
        logout
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const {
    signUp,
    userInfo,
    logout
  } = useContext(authContext);
  return {
    signUp,
    userInfo,
    logout
  };
}
