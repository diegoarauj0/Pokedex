import router from './router'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import theme from './theme'
import { ThemeProvider } from "styled-components"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor="#EDECED" highlightColor="#FFFFFF">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </ThemeProvider>
  )
}
