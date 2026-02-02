import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
