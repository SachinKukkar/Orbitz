import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-5-line "></i>
            </Link>
            <div className='h-1/2'>
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/max/875/0*GnULEr8fnY9RudZU"
                    alt=""
                />
            </div>

            <div className='h-1/2 p-4'>

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
                            <i className="ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 p-3'>
                            <i className="ri-cash-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹193.99</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Pay your Driver</button>
            </div>

        </div>
    )
}

export default Riding