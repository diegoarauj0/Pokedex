import { createBrowserRouter } from "react-router-dom"
//Router
import Home from "./home"

const router = createBrowserRouter([
  {
    path: "*",
    element:<Home />,
  }
])

export default router