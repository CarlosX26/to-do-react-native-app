import { StatusBar } from "react-native";
import { TodoContextProvider } from "./src/contexts/TodoContext";
import { Home } from "./src/pages/home";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257E5" />
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
    </>
  );
};

export default App;
