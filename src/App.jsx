import React,{ useState } from 'react'
import Home from './Components/home/Home'
import "./App.css"
import SideBar from './Components/SideBar/SideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='maincon'>
      <SideBar/>
      <Home/>
    </div>
  )
}

export default App
