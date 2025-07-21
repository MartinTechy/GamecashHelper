import { createRoot } from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import TempoTest from "./pages/TempoTest"

const router = createHashRouter([
  {
    path: "",
    element: <Home />,
    children: [{
      path: "/",
      element: <p>Accueil</p>
    },
    {
      path: "tempotest",
      element: <TempoTest />
    }]
  }
])


const App = () => {
  return (<RouterProvider router={router} />)
}

const domNode = document.getElementById('root')
const root = createRoot(domNode);
root.render(<App />)