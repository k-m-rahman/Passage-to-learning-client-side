import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App  mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
