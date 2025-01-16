import React from 'react'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import { use } from 'react'

function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vechiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24px',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }

  }, [panelOpen])


  useGSAP(function () {

    if (vehiclePanel) {
      gsap.to(vechiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vechiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }


  }, [vehiclePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="./src/assets/logo4copy.png" alt="Orbitz logo" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/875/0*GnULEr8fnY9RudZU" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%]  p-6 bg-white relative '>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip </h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
            />


            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type="text"
              placeholder='Add your destination'
            />

          </form>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vechiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-8'>

              <h5 className='p-3 text-center absolute top-0 bg-red-500'><i className="ri-arrow-down-wide-line"></i></h5>

        <div className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzRide <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Comfy car rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.66</h2>
        </div>

        <div className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="./src/assets/bike.jpeg" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzZoom<span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Fast and nimble bike ride</p>
          </div>
          <h2 className='text-lg font-semibold'>₹93.36</h2>
        </div>

        <div className='flex w-full p-3 border-2 active:border-black mb-2 rounded-xl items-center justify-between'>
          <img className='h-12' src="./src/assets/auto.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>OrbitzTuk <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Fun ride with tuk-tuk</p>
          </div>
          <h2 className='text-lg font-semibold'>₹133.98</h2>
        </div>

      </div>

    </div>
  )
}

export default Home
