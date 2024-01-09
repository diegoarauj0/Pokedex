import router from './router'
import { RouterProvider } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
}
