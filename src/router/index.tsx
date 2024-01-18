import { createBrowserRouter } from "react-router-dom"
//Router
import Pokedex from "./pokedex"
import Pokemon from "./pokemon"

const router = createBrowserRouter([
  {
    path: "*",
    element:<Pokedex />,
  },
  {
    path: "/:idOrName",
    element: <Pokemon />
  }
])

export default router