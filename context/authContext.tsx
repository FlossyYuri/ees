import React, { createContext, useState } from 'react';

const AuthContext = createContext({});
export const AuthProvider: any = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  async function Login() {
    setAuth(true);
  }
  return (
    <AuthContext.Provider value={{ auth, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
