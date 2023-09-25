import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Index } from './components/Index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Menu-Aside */}
      <Aside />

      <Index />

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
