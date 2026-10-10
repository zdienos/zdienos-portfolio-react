import { createContext, use } from "react";

export const ThemeContext = createContext(null);
export const PreviewContext = createContext(null);

export const useTheme = () => use(ThemeContext);
export const usePreview = () => use(PreviewContext);
