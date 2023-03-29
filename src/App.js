import './App.css'
import Home from './Home'
import Images from './Images'
import Greeting from './Greeting'
import Navbar from './Navbar'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="greeting" element={<Greeting />}></Route>
        <Route path="images" element={<Images />}></Route>
      </Routes>
    </div>
  )
}

export default App
