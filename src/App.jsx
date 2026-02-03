import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;