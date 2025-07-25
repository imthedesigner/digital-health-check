import React from 'react'

function SignupPage() {
  return (
    <div className='p-4'>
      <h2>Create Account</h2>
      <form className='space-y-4'>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default SignupPage
