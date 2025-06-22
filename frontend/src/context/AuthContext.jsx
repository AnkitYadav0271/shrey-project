import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [principal, setPrincipal] = useState(null);

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setPrincipal({ token });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setPrincipal({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setPrincipal(null);
  };

  return (
    <AuthContext.Provider value={{ principal, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
