import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import DataProvider from "./Components/Context/ContextData";
import AboutUs from "./Components/AboutUs/aboutUs";
import Service from "./Components/Service/ServiceDetails";
import Projects from "./Components/ProjectsPage/Projects";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "Projects", element: <Projects /> },
      { path: "services/:id", element: <Service /> },
    ],
  },
]);
function App() {
  return (
    <>
      <DataProvider>
        <RouterProvider router={routes}></RouterProvider>
      </DataProvider>
    </>
  );
}

export default App;
