import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Login from './Ccompnt/Login'
import Signup from './Ccompnt/Signup'
import Navbar from './Ccompnt/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './Ccompnt/StateBasics'
import Counter from './Ccompnt/Counter'
import Name from './Ccompnt/Name'
import Api from './Ccompnt/Api'
import Pokemon from './Ccompnt/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>WELCOME REACT</h1>
      <Routes>
        <Route path='/log' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/s' element={<Statebasics />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/name' element={<Name />} />
        <Route path='/api' element={<Api />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes> 
    
    </>
  )
}

export default App
