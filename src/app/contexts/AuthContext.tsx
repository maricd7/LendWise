"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  currentUser: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  login: boolean;
}

interface User {
  id: string;
  email: string;
  // Add other user fields as needed
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {}, []);

  const handleLogin = async (email: string, password: string) => {};

  const signOut = async () => {};

  return (
    <AuthContext.Provider value={{ currentUser, handleLogin, signOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
