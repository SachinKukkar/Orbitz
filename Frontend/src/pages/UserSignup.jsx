import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="./src/assets/logo4copy.png" alt="" />
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>

          <div className='flex gap-4 mb-6'>
            <input
              required

              className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='First Name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />

            <input
              required

              className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h3 className='text-lg font-medium mb-5'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full'>
            Signup
          </button>

        </form>
        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Orbitz and its affiliates to the details provided.</p>
      </div>
    </div>
  )
}

export default UserSignup