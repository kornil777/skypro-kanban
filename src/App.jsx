import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ModalStyles } from "./styles/ModalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ModalStyles />
      <AuthProvider>
        <TasksProvider>
          <Router>
            <AppRoutes />
          </Router>
        </TasksProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;