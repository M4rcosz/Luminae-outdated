import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import LayoutBase from "../pages/LayoutBase";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    }
])

