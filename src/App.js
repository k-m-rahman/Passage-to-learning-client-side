import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "App dark mx-auto" : "App  mx-auto"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
