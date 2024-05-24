import { createTheme } from "@mui/material";
import { baseTypography } from "./typography";
import { theme } from "./theme";
import { override } from "./override";

export const themes = createTheme(override, baseTypography, theme);
