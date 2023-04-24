
import React, { useState, useEffect } from "react";;
export const AuthContext = React.createContext();
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const jwt= JSON.parse(localStorage.getItem("schooltoken"));
        if (jwt) {
           setAuthToken(jwt);
          setUser(jwt);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = async (user) => {
    try {
      localStorage.setItem("schooltoken", JSON.stringify(user));
      setAuthToken(user);
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("schooltoken")
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};