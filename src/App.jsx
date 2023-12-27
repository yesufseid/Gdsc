import { RouterProvider } from "react-router-dom"
import router from "./utils/router"
import Nav from "./Pages/Nav"
function App() {
  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
