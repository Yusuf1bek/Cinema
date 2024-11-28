import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import heroImg1 from "../assets/images/bg-hero.png"
import heroImg2 from "../assets/images/bg-hero-1.jpg"
import heroImg4 from "../assets/images/bg-hero-3.avif"
import { FaPlay } from "react-icons/fa";

const SwiperGalery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-[1300px] h-[640px] mb-[50px] container"
      >
        <SwiperSlide>
          <div className='text-white bg-hero relative h-full w-full bg-no-repeat bg-cover bg-center rounde'>
              <div className='shadow-2xl absolute top-[450px] left-[490px] '>
                <h2 className='font-[500] text-[42px] text-center mb-[20px] leading-[40px]'>Kung Fu Panda 4</h2>
                <p className='font-[400] text-[18px] text-center leading-[16px] mb-[16px]'>2024 • Комедия • 1ч 34м • EN • 6+</p>
                <button className='w-[300px] py-[10px] bg-whiteText text-redText flex items-center gap-[10px] justify-center rounded-xl'>
                    <FaPlay/>
                    Смотреть
                </button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white bg-hero1 h-full w-full bg-no-repeat bg-cover bg-center rounde'>
              <div className='shadow-2xl absolute top-[450px] left-[490px] '>
                <h2 className='font-[500] text-[42px] text-center mb-[20px] leading-[40px]'>Мстители</h2>
                <p className='font-[400] text-[18px] text-center leading-[16px] mb-[16px]'>2019 • Фантастика • 2ч 12м • EN • 16+</p>
                <button className='w-[300px] py-[10px] bg-whiteText text-redText flex items-center gap-[10px] justify-center rounded-xl'>
                    <FaPlay/>
                    Смотреть
                </button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-white bg-hero3 h-full w-full bg-no-repeat bg-cover bg-center rounde'>
              <div className='shadow-2xl absolute top-[450px] left-[490px] '>
                <h2 className='font-[500] text-[42px] text-center mb-[20px] leading-[40px]'>Бетмен</h2>
                <p className='font-[400] text-[18px] text-center leading-[16px] mb-[16px]'>2022 • Криминал • 2ч 56м • EN • 16+</p>
                <button className='w-[300px] py-[10px] bg-whiteText text-redText flex items-center gap-[10px] justify-center rounded-xl'>
                    <FaPlay/>
                    Смотреть
                </button>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={heroImg1} width={108} height={64}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroImg2} width={108} height={64}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroImg4} width={108} height={64}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperGalery