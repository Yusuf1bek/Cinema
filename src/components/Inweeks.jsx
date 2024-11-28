import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
const Inweeks = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className='container mt-[48px] mb-[120px]'>
        <div className='flex items-center justify-between mb-[20px]'>
            <h2 className='font-[500] text-[20px] leading-[24px] text-white'>На неделе</h2>
            <p className='font-[500] text-[20px] leading-[24px] text-redText flex items-center'>
                Показать все
                <MdKeyboardArrowRight/>
            </p>
        </div>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div className='w-[280px] h-[400px] rounded-xl bg-[#1D1D1D]'></div>
                <h2 className='font-[500] text-[24px] leading-[27px] text-white mb-[8px] mt-[12px]'>Kung Fu Panda 4 ENGLISH</h2>
                <p className='font-[500] text-[14px] leading-[16px] text-greyText'>Комедия, Фэнтези</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='w-[280px] h-[400px] rounded-xl bg-[#1D1D1D]'></div>
                <h2 className='font-[500] text-[24px] leading-[27px] text-white mb-[8px] mt-[12px]'>Dune 2 – EN</h2>
                <p className='font-[500] text-[14px] leading-[16px] text-greyText'>Фантастика, Боевик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='w-[280px] h-[400px] rounded-xl bg-[#1D1D1D]'></div>
                <h2 className='font-[500] text-[24px] leading-[27px] text-white mb-[8px] mt-[12px]'>Дюна – RU</h2>
                <p className='font-[500] text-[14px] leading-[16px] text-greyText'>Комедия, Фэнтези</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='w-[280px] h-[400px] rounded-xl bg-[#1D1D1D]'></div>
                <h2 className='font-[500] text-[24px] leading-[27px] text-white mb-[8px] mt-[12px]'>Kung Fu Panda 4
                RUSSIAN</h2>
                <p className='font-[500] text-[14px] leading-[16px] text-greyText'>Комедия, Фэнтези</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Inweeks