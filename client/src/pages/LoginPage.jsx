export default function LoginPage() {
  return (
    <form className='login'>
      <h1>Login</h1>
      <input type='text' placeholder='Enter your username' />
      <input type='password' placeholder='Enter your password' />
      <button type='submit'>Login</button>
    </form>
  )
}
