import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function login(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })

    response.ok ? setRedirect(true) : alert('Wrong credentials')
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form className='login' onSubmit={login}>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='Enter your username'
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />
      <input
        type='password'
        placeholder='Enter your password'
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button type='submit'>Login</button>
    </form>
  )
}
