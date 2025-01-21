import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
  const [FinishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (FinishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [FinishRidePanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex item-center justify-between w-screen">
        <img className="w-16" src="./src/assets/logo4copy.png" alt="" />
        <Link
          to="/captain-login"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line "></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/875/0*GnULEr8fnY9RudZU"
          alt=""
        />
      </div>

      <div className="h-1/5 p-6 flex items-center justify-between relative bg-blue-300 pt-10" onClick={()=>{
        setFinishRidePanel(true)
      }}>
        <h5
          className="p-1 text-center absolute w-[93%] top-0"
          onClick={() => setFinishRidePanel((prev) => !prev)}
        >
          <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
        </h5>

        <h4 className="text-xl font-semibold">4 KMs away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
