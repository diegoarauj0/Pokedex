import { createBrowserRouter } from "react-router-dom"
import Main from "../components/main"
//Router
import Pokedex from "./pokedex"
import Pokemon from "./pokemon"

const router = createBrowserRouter([
  {
    path: "*",
    element:<Main title="Pokedex"><Pokedex /></Main>,
  },
  {
    path: "pokemon/:id?",
    element: <Main title="Pokedex"><Pokemon /></Main>
  }
])

export default router