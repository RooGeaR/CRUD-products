import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Produce from "./pages/Produce";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Detail />,
      },
      {
        path: "/produce",
        element: <Produce />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
