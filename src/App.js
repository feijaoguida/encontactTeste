import React from "react";
import Routes from "./routes/index";

import history from "./services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Routes history={history} />
      <GlobalStyle />
    </>
  );
}

export default App;
