import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  colors,
} from "@mui/material";
import { themes } from "./theme";
import Layout from "./components/layout";
import { theme } from "./theme/theme";

function App() {
  const globalStyles = (theme) => ({
    html: {
      height: "100%",
    },
    body: {
      backgroundColor: theme.palette.primary,
      color: theme.palette.common.white,
      height: "100%",
    },
    "#root": { height: "100%" },
  });
  console.log(theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
