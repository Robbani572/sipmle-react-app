import { useState } from 'react'
import './App.css'
import Nav from './components/header/Nav'
import Prices from './components/priceList/Prices'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav></Nav>
     <Prices></Prices>
     <Dashboard></Dashboard>
     <Footer></Footer>
    </div>
  )
}

export default App
