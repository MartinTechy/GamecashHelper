import { createRoot } from "react-dom/client"

const App = () => {
  return (<h2>Hello from React !</h2>)
}


const domNode = document.getElementById('root')
const root = createRoot(domNode);
root.render(<App />)