import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Restaurent from "./components/Restaurents";
const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: <Restaurent />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

/*
const Title = () => <h1 id="jsxHeading">Namaste React by JSX</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="Heading">functional component</h1>
  </div>
);
*/
