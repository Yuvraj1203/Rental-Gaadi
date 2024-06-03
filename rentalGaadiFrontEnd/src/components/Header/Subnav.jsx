import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Subnav = ({vehicle,handleChangeFalse,handleChangeTrue}) => {
  if(vehicle){
    var bikestyle = {
      border : '2px solid #fefbea'
    }
    var carstyle = {
      border : '2px solid transparent'
    }
  }else{
    var bikestyle = {
      border : '2px solid transparent'
    }
    var carstyle = {
      border : '2px solid #fefbea'
    }
  }

  return (
    <nav className='bg-gradient-to-r from-[#FBE09B] to-[#E8CF8D]'>
    <nav className='px-10 py-3 max-w-[1440px] m-auto  flex justify-between items-center text-sm md:text-xl  text-white '>
        <ul className='flex'>
            <NavLink
            style={bikestyle}
            onClick={handleChangeTrue}
            className=' bg-[#e8cf8d] mr-5 py-1.5 px-3 rounded-2xl duration-500 cursor-pointer border-2 border-transparent hover:border-[#fefbea]'
            ><li className=''><FontAwesomeIcon className='mr-5 ' icon={faMotorcycle} />Bikes</li></NavLink>
            <NavLink
            style={carstyle}
            onClick={handleChangeFalse}
            className='bg-[#e8cf8d] mx-5 py-1.5 px-3 rounded-2xl duration-500 cursor-pointer border-2 border-transparent hover:border-[#fefbea]'
            ><li className=''><FontAwesomeIcon className='mr-5 ' icon={faCar} />Cars</li></NavLink>
        </ul>
    </nav>
    </nav>
  )
}

export default Subnav