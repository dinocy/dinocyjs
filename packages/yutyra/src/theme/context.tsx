import { createContext, ReactNode, useEffect } from "react";

import "./theme.scss";

type Theme = "default" | "simple";

export const ThemeContext = createContext<Theme>("default");

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({
  theme = "default",
  children,
}: ThemeProviderProps) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
