import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <ModalProvider>
          <Router>
            <AppRoutes />
          </Router>
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;