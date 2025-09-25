"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type userDataType = {
  code: string;
  email: string;
  id: string;
};

// Define the type for context
type AuthContextType = {
  DEFAULT_CURRENCY: string;
  currencyMap: { [key: string]: string };
  updateCurrency: (id: string, val: string) => void;
  userData: userDataType;
  setUserData: React.Dispatch<React.SetStateAction<userDataType>>;
  layoutMap: string;
  updateLayout: (val: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_CURRENCY = "₦";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currencyMap, setCurrencyMap] = useState<{ [key: string]: string }>({});
  const [layoutMap, setLayoutMap] = useState("grid");
  const [userData, setUserData] = useState<userDataType>(() => {
    // Load user data from localStorage if available
    const storedUserData =
      typeof window !== "undefined" ? localStorage.getItem("userData") : null;
    return storedUserData ? JSON.parse(storedUserData) : ({} as userDataType);
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const updateCurrency = (id: string, val: string) => {
    if (id) {
      setCurrencyMap((prev) => ({ ...prev, [id]: val }));
    }
  };

  const updateLayout = (val: string) => {
    setLayoutMap(val);
  };

  const value = {
    currencyMap,
    updateCurrency,
    userData,
    setUserData,
    DEFAULT_CURRENCY,
    updateLayout,
    layoutMap,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
