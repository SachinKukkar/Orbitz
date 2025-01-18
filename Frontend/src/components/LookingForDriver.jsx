import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>


      <h5 className='p-1 text-center absolute w-[94%] top-0' onClick={() => {
        props.setVehicleFound(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex gap-2 flex-col justify-between items-center'>
        <img className='h-20' src="./src/assets/BlackCar.png" alt="" />

        <div className='w-full mt-5'>

          <div className='flex items-center gap-4 p-3 border-b-2'>
          <i className="ri-map-pin-range-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>

          <div  className='flex items-center gap-4 p-3 border-b-2'>
          <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>

          <div  className='flex items-center gap-4 p-3'>
          <i className="ri-cash-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.99</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LookingForDriver