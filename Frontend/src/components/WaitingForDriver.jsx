import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>


      <h5 className='p-1 text-center absolute w-[94%] top-0' onClick={() => {
        props.waitingForDriver(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between'>
      <img className='h-16' src="./src/assets/BlackCar.png" alt="" />
      <div className='text-right'> 
        <h2 className='text-lg font-medium'>Sankalp</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>RJ 14 AB 1234</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki Alto LXI</p>
      </div>
      </div>

      <div className='flex gap-2 flex-col justify-between items-center'>
        

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

export default WaitingForDriver