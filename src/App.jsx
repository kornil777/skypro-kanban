import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ModalStyles } from "./styles/ModalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}

export default App;