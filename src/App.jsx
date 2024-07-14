import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then((res)=>{
      setUsers(res.data);
    })
  },[])
  return (
    <>
    <div>
      {users.map((data,key)=>{
        return <div key={key}>{data.firstName}</div>
      })}
    </div>
    </>
  )
}

export default App
