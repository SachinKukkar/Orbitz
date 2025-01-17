import React from 'react'


const LocationSearchPanel = (props) => {
    console.log(props)
    //sample array for locations
    const locations = [
        "12B, Opposite Gupta's Bakery, Zenith Dance Academy, Mumbai",
        "45C, Adjacent to Patel Market, Alpha Tutoring Center, New Delhi",
        "78D, Near Metro Station Gate 3, Phoenix Coaching Hub, Hyderabad",
        "33A, Behind City Mall, Bright Minds Learning Academy, Pune",
        "90E, Next to Sharma's Book Store, Skyline Coding Institute, Chennai"
    ]

    return (
        <div>
            {/* This is just a sample data */}

            {
                locations.map(function (elem, idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-2-fill "></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }

        </div>
    )
}

export default LocationSearchPanel