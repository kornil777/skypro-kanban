// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import GlobalStyles from "./styles/GlobalStyles";
import { ModalStyles } from "./styles/ModalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ModalStyles />
      <AuthProvider>
        <TasksProvider>
          <Router>
            <DndProvider backend={HTML5Backend}>
              <AppRoutes />
            </DndProvider>
          </Router>
        </TasksProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;