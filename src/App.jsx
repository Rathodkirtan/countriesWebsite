import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './componets/Navbar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
