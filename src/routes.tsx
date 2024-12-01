import { RouteObject } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactUs from "./pages/ContactUsPage/ContactUs";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ContactUs />,
      },
    ],
  },
];

export default routes;
