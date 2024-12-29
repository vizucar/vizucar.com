import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutApp from "./components/LayoutApp";
import Home from "./views/Home";

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <LayoutApp />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "metrics",
              element: <h1>Ressource</h1>,
            },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
}

export default App;
