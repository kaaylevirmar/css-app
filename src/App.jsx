import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import FlashMessage from './components/FlashMessage';
import { useState } from 'react';

function App() {
const [flashMessage, setFlashMessage] = useState({message: '', type: ''});

const showFlashMessage = (message, type) => {
  setFlashMessage({message,type})

  setTimeout(()=>{
    setFlashMessage('');
  },3000)
}

  return (
    <div className='flex h-screen '>
      <div className='w-64 fixed h-full'>
        <Navbar />
      </div>
      <div className='flex-1 ml-72 overflow-x-auto'>
        <FlashMessage flashMessage={flashMessage}/>
        <Outlet context={{showFlashMessage}} />
      </div>
    </div>
  )
}

export default App
