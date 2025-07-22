import React from 'react'

function LoginPage() {
  return (
    <div className='p-4'>
      <h2>Login or Continue as Guest</h2>
      <form className='space-y-4'>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
        <button type='button'>Continue as Guest</button>
      </form>
    </div>
  )
}

export default LoginPage
