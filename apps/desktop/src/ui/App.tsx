import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutApp from "./components/LayoutApp";
import Home from "./views/Home";
import Metrics from "./views/Metrics";

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
              element: <Metrics />,
            },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
}

export default App;
