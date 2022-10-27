import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";
import { getStoredData } from "./utils/fakeDb";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const storedData = getStoredData();
    setDarkMode(storedData);
  }, []);
  return (
    <div className={darkMode ? "App dark mx-auto" : "App  mx-auto"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
