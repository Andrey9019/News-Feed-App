import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  //   user: { email: string; name: string } | null;
  token: string | null;
  login: (
    token: string
    // user: { email: string; name: string }
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  //   const [user, setUser] = useState<{ email: string; name: string } | null>(
  //     null
  //   );
  const isAuthenticated = !!token;

  const login = (
    newToken: string
    // newUser: { email: string; name: string }
  ) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    // console.log(
    //   `[AuthContext] Logged in with token: ${newToken.slice(0, 20)}...`
    // );
    // setUser(newUser);
    // console.log(`[AuthContext] Logged in: ${newUser.email}`);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    // setUser(null);
    // console.log("[AuthContext] Logged out");
  };

  // console.log("[AuthContext] Providing context:", {
  //   isAuthenticated,
  //   // user,
  //   token,
  // });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        //   user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  // console.log("[useAuth] Accessing context:", context);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
