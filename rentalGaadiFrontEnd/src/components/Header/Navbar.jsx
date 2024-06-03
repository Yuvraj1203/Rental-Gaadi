import React from 'react'
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-3 max-w-[1440px] m-auto items-center text-sm md:text-xl font-medium text-[#800020]' >
        <Link to="/"><p className='text-3xl'>RentalGaadi</p></Link>
        <ul className='flex'>
            <NavLink 
                        to="/service"
                        className={({ isActive }) =>
                            `${isActive ? " text-[#ff7600]":""}`
                        }            
            ><li className='mx-5'>Services</li></NavLink>
            <NavLink 
                        to="/about"
                        className={({ isActive }) =>
                            `${isActive ? " text-[#ff7600]":""}`
                        }            
            ><li className='mx-5'>About Us</li></NavLink>
            <NavLink 
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive ? " text-[#ff7600]":""}`
                        }            
            ><li className='mx-5'>Contact</li></NavLink>
        </ul>
        <Button sx={{background:'#800020',border:'1px solid #fefbea',color:'#fefbea',fontWeight:'600','&:hover':{background:"#fefbea",border:'1px solid #800020',color:'#800020 '}}} variant="outlined" href="#outlined-buttons">
            Book Now
        </Button>
    </nav>
  )
}

export default Navbar