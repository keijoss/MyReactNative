import React, { createContext, useState, useContext } from 'react';

// Create a context with default value as null (not authenticated)
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    profileName: '',
    profileStudentId: '',
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
