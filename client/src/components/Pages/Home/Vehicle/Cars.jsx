import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faGasPump, faChair, faCar } from '@fortawesome/free-solid-svg-icons'
import Car from '../../../../assets/jsonData/Car'


const Cars = () => {
  
  return (
    <section className='max-w-[1440px] m-auto p-10 flex flex-wrap justify-around gap-10'>

      {Car.map((eachCar , index)=>{
        
          return (
          <div className='min-w-[410px] w-1/4 divide-y divide-[#dfdfdf] duration-500 shadow-[1px_1px_5px_1px_rgba(228,228,228,1)] hover:shadow-[1px_1px_11px_1px_rgba(201,201,201,1)] rounded'>
            <div className='w-full py-5 h-[250px]  px-10' key={index}>
              <img src={eachCar.imgSrc} className='h-[200px] w-[90%] m-auto' alt="carImage" />
            </div>
            <h4 className='bg-[#f7f7f7ba] p-5 text-[#646464] text-2xl font-bold '>{eachCar.name}</h4>
            <div className='p-5 text-[#6c757d] text-[14px]'>
              <div className='flex justify-between'>
                <span>
                <FontAwesomeIcon className='mr-1 ' icon={faGears} />{eachCar.specs.gear},
                <FontAwesomeIcon className='mx-1 ' icon={faGasPump} />{eachCar.specs.fuel},
                <FontAwesomeIcon className='mx-1 ' icon={faChair} />{eachCar.specs.seat}
                </span>
                <span className='text-[10px]'>
                  {eachCar.model}
                </span>
              </div>
              <div className='mt-10'>
              <FontAwesomeIcon className='mr-2 text-[#3ac8a9]' icon={faCar} /><b>Self Pick Up From : </b> {eachCar.pickup}
              </div>
            </div>
            <div className='flex px-5 py-2 justify-between'>
              <span className='text-[18px] text-[#1f1f1f] font-medium'>&#8377; {eachCar.perDayPrice}</span>
              <button className='text-[14px] rounded text-white font-bold px-5 py-2 bg-gradient-to-r from-[#14c994cc] to-[#0687a7]'>Book Now</button>
            </div>
          </div>)

      })}

    </section>
  )
}

export default Cars