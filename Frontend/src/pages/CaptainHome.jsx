import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex item-center justify-between w-screen'>
        <img className="w-16" src="./src/assets/logo4copy.png" alt="" />
        <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line "></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/875/0*GnULEr8fnY9RudZU"
          alt=""
        />
      </div>

      <div className='h-2/5 p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'> 
            <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIV84qK7oSHGMk_7wiZjH3K__lvmkJr9hjw&s" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel </h4>
          </div>
          <div >
            <h4 className='text-xl font-semibold'>₹295.47</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-6 items-start'>

          <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>
          
          <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>
         
          <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CaptainHome