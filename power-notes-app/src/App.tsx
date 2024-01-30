import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { PersistentLeftMenu } from "./navigation-components/PersistentLeftMenu";
import { LoginButton } from "auth-components/LoginButton";
import LogoutButton from "auth-components/LogoutButton";
import { UserProfile } from "auth-components/UserProfile";

function App() {
  return (
    <React.Fragment>
      <LoginButton />
      <LogoutButton />
      <UserProfile />
      <PersistentLeftMenu />
    </React.Fragment>
  );
}

export default App;
