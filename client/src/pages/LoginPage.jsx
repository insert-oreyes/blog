import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUserInfo } = useContext(UserContext)

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

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    } else {
      alert('Wrong credentials')
    }
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
