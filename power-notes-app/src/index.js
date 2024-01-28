import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#ebcc34",
    },
    secondary: {
      main: "#fffbc4",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y2cpnxrzduhff4xe.us.auth0.com"
      clientId="4Vgaa10GSIqKET8zlrlv5B17EokGZBVa"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
