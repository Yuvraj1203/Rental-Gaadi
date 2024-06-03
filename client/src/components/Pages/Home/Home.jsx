import React, {useState} from 'react'
import Subnav from '../../Header/Subnav'
import Hero from '../../Hero/Hero'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Motor from './Motor';
import Why from './Section/Why';

const Home = () => {
  const [vehicle , setVehicle] = useState(true);

  const handleChangeTrue = () => {
    setVehicle(true);
  }
  const handleChangeFalse = () => {
    setVehicle(false);
  }

  return (
    <>
        <Subnav vehicle={vehicle} handleChangeTrue={handleChangeTrue} handleChangeFalse={handleChangeFalse} />
        <Hero />
        <Motor vehicle={vehicle} />
        <Why />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Homelayout />}>
    //       <Route path='/bikes' element={<Motor />} />
    //       <Route path="/cars" element={<Motor />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default Home