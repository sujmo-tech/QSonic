import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Workshops } from "./pages/Workshops";
import { Mentors } from "./pages/Mentors";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "workshops", element: <Workshops /> },
      { path: "mentors", element: <Mentors /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);