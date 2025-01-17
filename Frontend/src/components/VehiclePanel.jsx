import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>

<h5 className='p-1 text-center absolute w-[94%] top-0' onClick={()=>{
                props.setVehiclePanel(false)
              }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
              <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle </h3>

        <div onClick={()=>{
            props.setconfirmRidePanel(true)
        }} className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzRide <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Comfy car rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.66</h2>
        </div>

        <div onClick={()=>{
            props.setconfirmRidePanel(true)
        }} className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="./src/assets/bike.jpeg" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzZoom<span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Fast and nimble bike ride</p>
          </div>
          <h2 className='text-lg font-semibold'>₹93.36</h2>
        </div>

        <div onClick={()=>{
            props.setconfirmRidePanel(true)
        }} className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="./src/assets/auto.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzTuk <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Fun ride with tuk-tuk</p>
          </div>
          <h2 className='text-lg font-semibold'>₹133.98</h2>
        </div>

    </div>
  )
}

export default VehiclePanel