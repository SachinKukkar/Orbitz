import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>

<h5 className='p-1 text-center absolute w-[94%] top-0' onClick={() => {
        
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

    <div className='fixed p-6 top-0 flex item-center justify-between w-screen'>
      <img className="w-16" src="./src/assets/logo4copy.png" alt="" />
      <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line "></i>
      </Link>
    </div>
    <div className='h-4/5'>
      <img
        className="h-full w-full object-cover"
        src="https://miro.medium.com/max/875/0*GnULEr8fnY9RudZU"
        alt=""
      />
    </div>

    <div className='h-1/5 p-6 flex items-center justify-between  bg-blue-300'>
    <h4 className='text-xl font-semibold'>4 KMs away</h4>
    <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
    </div>

  </div>
  )
}

export default CaptainRiding