import Home from "./components/Home";
import About from "./components/About";
import Description from "./components/Description";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/jean/:id",
        element: <Description />
    }
]

export default routes