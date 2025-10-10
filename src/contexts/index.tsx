import type { ReactNode } from "react";
import AuthContextProvider from "./AuthContext";
import I18nContextProvider from "./I18nContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <I18nContextProvider>{children}</I18nContextProvider>
    </AuthContextProvider>
  );
};

export default AppProvider;
