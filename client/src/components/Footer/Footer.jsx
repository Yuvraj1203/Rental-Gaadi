import React from 'react'
import List from './List'

const Footer = () => {
    const serviceableArea = ["Hiran Magri","Shubhash Nagar","BhopalPura","RamPura"];
    const usefulLinks = ["Service","About Us","Contact Us"]
    // const usefulLinks = {
    //     service : "Service",
    //     about : "About Us",
    //     contact : "Contact Us"
    // };
    const contactFoot = ["1122334455","yuvrajsinghpati@gmail.com"];

  return (
    <footer className=' bg-[#EED592] text-white mt-auto '>
    <container className="flex p-10 max-w-[1440px] m-auto flex-wrap">
        <div className='flex flex-col  sm:w-1/2 xl:w-1/4 py-10 pr-10 w-full'>
            <div className='mb-10'>
                <h5 className='text-3xl uppercase text-white font-bold'>Have a </h5>
                <span className='text-5xl opacity-[0.4] uppercase font-bold'>Happy Easy Ride.</span>
            </div>
            <p className='text-xl text-[#0009] font-bold'>A unit of Udaipur Travellers</p>
        </div>
        <div className=' sm:w-1/2 xl:w-1/4 py-10 pr-10 w-full'>
            <h6 className='text-3xl uppercase text-white font-bold'>Serviceable Area</h6>
            <List items={serviceableArea} />
        </div>
        <div className=' sm:w-1/2 xl:w-1/4 py-10 pr-10 w-full'>
            <h6 className='text-3xl uppercase text-white font-bold'>Useful Links</h6>
            <List items={usefulLinks} />
        </div>
        <div className=' sm:w-1/2 xl:w-1/4 py-10 pr-10 w-full'>
            <h6 className='text-3xl uppercase text-white font-bold'>Contact us</h6>
            <List items={contactFoot} />
        </div>
        </container>
    </footer>
  )
}

export default Footer