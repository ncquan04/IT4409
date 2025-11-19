import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "../shared/models/user-model";
import { Contacts } from "../shared/contacts";
import AppStorage from "../storage";

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string | Date;
  address?: string[];
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(Contacts.API_CONFIG.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      const { accessToken } = data;

      if (accessToken) {
        AppStorage.set("token", accessToken);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    AppStorage.remove("token");
    AppStorage.remove("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = async (payload: RegisterPayload) => {
    try {
      const response = await fetch(Contacts.API_CONFIG.AUTH.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = AppStorage.get("token");
    const storedUser = AppStorage.get("user");

    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
