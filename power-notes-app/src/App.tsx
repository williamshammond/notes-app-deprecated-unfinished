import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { PersistentLeftMenu } from "./navigation-components/PersistentLeftMenu";

function App() {
  return (
    <Container sx={{}}>
      <PersistentLeftMenu />
    </Container>
  );
}

export default App;
