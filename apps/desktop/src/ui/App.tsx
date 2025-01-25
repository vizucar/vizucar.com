import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import LayoutApp from "./components/LayoutApp";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Metrics from "./views/Metrics";

const queryClient = new QueryClient();

function App() {
  const router = useMemo(
    () =>
      createHashRouter([
        {
          path: "/",
          element: (
            <QueryClientProvider client={queryClient}>
              <LayoutApp />
            </QueryClientProvider>
          ),
          errorElement: <ErrorPage />,
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
