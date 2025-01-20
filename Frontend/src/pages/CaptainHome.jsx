import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)


  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ridePopupPanel]);


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
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
    <RidePopUp setridePopupPanel={setridePopupPanel}  />
      </div>

    </div>
  )
}

export default CaptainHome