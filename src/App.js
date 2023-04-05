import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
// import AboutPage from "./pages/About";
// import ProjectsPage from "./pages/Projects";

// 1: route definitions
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "projects", element: <ProjectsPage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },
]);

// 2: providing
function App() {
  return <RouterProvider router={router} />;
}

export default App;
