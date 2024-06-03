import React, { useEffect } from 'react'
import Bikes from './Vehicle/Bikes'
import Cars from './Vehicle/Cars'

const Motor = ({vehicle}) => {

  if(vehicle){
    return (
      <section>
      <Bikes />
      </section>
    )
  }else{
    return(
      <section>
      <Cars />
      </section>
    )
  }
}

export default Motor