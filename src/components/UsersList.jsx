import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UsersList(){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchUsers = async ()=>{
      try{
        const res = await axios.get('http://100.30.240.91:5000/api/users')
        setUsers(res.data)
      }catch(err){
        setError('Failed to load users')
      }finally{
        setLoading(false)
      }
    }
    fetchUsers()
  },[])

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  if(users.length === 0) return <p>No users found. Run backend `/api/seed` to add sample users.</p>

  return (
    <ul className="users-list">
      {users.map(u => (
        <li key={u._id}>
          <strong>{u.name}</strong>
          <div>{u.email}</div>
        </li>
      ))}
    </ul>
  )
}
