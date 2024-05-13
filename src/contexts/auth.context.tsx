"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { createCustomSetStateFn, loadLocalStorage } from "@/helpers/global";

type AuthContextType = {
  user?: any;
  setUser: Dispatch<SetStateAction<any>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLocalStorage("user", setUser);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser: createCustomSetStateFn("user", setUser) }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export default AuthContext;
