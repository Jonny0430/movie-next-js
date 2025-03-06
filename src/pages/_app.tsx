import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "@/src/scss/MaterialTheme";
import { useState } from "react";
import { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  //Socket.io
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}