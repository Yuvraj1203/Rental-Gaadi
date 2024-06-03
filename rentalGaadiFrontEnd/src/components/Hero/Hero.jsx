import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faMagnifyingGlass, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
import Heroinp from './Heroinp';
import Herospans from './Herospan';


const Hero = () => {
  return (
    <section id='hero' className='bg-[#fcdb8c40] max-h-[500px]'>
    <section  className='max-w-[1440px] m-auto grow flex flex-col p-10 py-5 text-white grow'>
        <h1 className='text-5xl font-bold'>Car Rental – Search, Compare & Ride</h1>
        <ul className='flex text-lg my-10' >
            <li className='mr-5'>Free cancellations on most bookings</li>
            <li className='mr-5'>Covers Whole Udaipur</li>
            <li className='mr-5'>Customer support 24*7</li>
        </ul>
        <div className='max-w-[fit-content] m-auto flex-wrap justify-normal flex bg-[#800020] p-5 rounded xl:flex-nowrap justify-between'>
            <Heroinp placeholder="Location..." type="text" width="fit-conntent" icons={<FontAwesomeIcon className='' icon={faMagnifyingGlass}  />} des="Pick-Up Location"/>
            <Herospans type="date" width="fit-conntent" icons={<FontAwesomeIcon className='' icon={faCalendar } />} des="Pick-Up Date" />
            <Herospans type="time" width="fit-conntent" icons={<FontAwesomeIcon className='' icon={faClock} />} des="Time" />
            <Herospans type="date" width="fit-conntent" icons={<FontAwesomeIcon className='' icon={faCalendar} />} des="Drop-Off date" />
            <Herospans type="time" width="fit-conntent" icons={<FontAwesomeIcon className='' icon={faClock} />} des="Time" />
            <Button sx={{margin:'10px 20px 10px 0',backgroundColor:'#fefbea',color:'#800020',fontWeight:'600','&:hover':{backgroundColor:'#800020',color:'#fefbea',border:'1px solid #fefbea'}}} variant="contained">Search</Button>
        </div>
    </section>
    </section>
  )
}

export default Hero