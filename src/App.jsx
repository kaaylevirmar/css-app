import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className='flex'>
      <div>
        <Navbar />
      </div>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
