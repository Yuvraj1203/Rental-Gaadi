import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
    

const data = [
    {
        image : "images/carsouelSupport.png"
    },
    {
        image : "images/carsouelProcess.png"
    },
    {
        image : "images/carsouelCars.png"
    },
    {
        image : "images/carsouelOver.png"
    },
    {
        image : "images/carsouel24.png"
    },
    {
        image : "images/carsouelSupport.png"
    },
]

const Why = () => {
    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <section>
    <section className='p-10 max-w-[1440px] m-auto'>
        <h2 className='text-3xl font-bold text-[#5a5a5a] py-10 '>Why Happyeasy Rides</h2>
        <div className='px-10'>
        <Slider {...settings}>
            {data.map((e)=>{
                return <div className='px-5'><img className='' src={e.image} /></div>;
            })}
        </Slider>
        </div>
    </section>
    </section>
  )
}

export default Why