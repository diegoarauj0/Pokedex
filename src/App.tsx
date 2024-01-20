import router from './router'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function App() {
  return (
    <SkeletonTheme>
      <RouterProvider router={router} />
    </SkeletonTheme>
  )
}
