import { useState } from 'react'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function register(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    response.status === 200
      ? alert('Registration successful!')
      : alert('Registration failed')
  }
  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
      <input
        type='text'
        placeholder='Enter your username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  )
}
