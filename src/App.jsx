import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom"

function App() {
    //tempo
  return (
    <div className='flex h-screen '>s
      <div className='w-64 fixed h-full'>
        <Navbar />
      </div>
      <div className='flex-1 ml-72 overflow-x-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
