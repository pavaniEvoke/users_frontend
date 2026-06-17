import React from 'react'
import UsersList from './components/UsersList'

export default function App(){
  return (
    <div className="app">
      <header>
        <h1>All Users</h1>
      </header>
      <main>
        <UsersList />
      </main>
    </div>
  )
}
