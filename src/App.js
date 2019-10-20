import React from "react";

import GlobalStyles from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/index";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
