import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ModalStyles } from "./styles/ModalStyles";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Страницы
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ModalStyles />
      <AuthProvider>
        <TasksProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/card/:id" element={<MainPage />} />
                <Route path="/new" element={<MainPage />} />
                <Route path="/exit" element={<MainPage />} />
              </Route>
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </TasksProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;