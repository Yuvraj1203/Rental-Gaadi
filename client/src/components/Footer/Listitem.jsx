import React from 'react'
import { NavLink } from 'react-router-dom'

const Listitem = ({text}) => {
  return (
    <li className='text-lg font-medium m-3 cursor-pointer hover:text-[#800020] duration-200 w-[max-content] '>{text}</li>
  )
}

export default Listitem