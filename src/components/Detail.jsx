import React, { useEffect, useState } from 'react';
import { useGetDetailQuery } from '../redux/api/movie-api';
import { useParams } from 'react-router-dom';
import {TICKET_LISTS} from "../static"
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6"
import detail1 from "../assets/images/detail1.png"
import detail2 from "../assets/images/detail.png"
const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const [showTickets, setShowTickets] = useState(false); 
    console.log(data);
    
  return (
    <>
      <div className="container my-5">
            
        <div className="flex justify-center gap-0 mb-4">
          <button
            onClick={() => setShowTickets(false)}
            className={`px-4 py-2 rounded-l-lg ${
              !showTickets ? 'bg-[#1D1D1D] text-redText' : 'bg-[#111111] text-white'
            }`}
          >
            О фильме
          </button>
          <button
            onClick={() => setShowTickets(true)}
            className={`px-4 py-2 rounded-r-lg ${
              showTickets ? 'bg-[#1D1D1D] text-redText' : 'bg-[#111111] text-white'
            }`}
          >
            Билеты
          </button>
        </div>
        {showTickets ? (
          <div className="text-white">
            <h2 className="text-4xl mb-4">Cinematica</h2>
            <p>7, Улица Алмазар​, Шайхантахурский район</p>
            <ul className='flex items-center justify-center flex-wrap gap-[20px] mt-[30px]'>
                {
                  TICKET_LISTS?.map(item => (
                    <li className='w-[220px] rounded-lg  bg-[#111111] p-[12px]' key={item.id}>
                        <h3 className='font-[500] text-[14px] text-greyText leading-[16px] mb-[12px]'>{item.title}</h3>
                            <div className='flex items-center gap-[60px] mb-[12px]'>
                                <p className='font-[500] text-[16px] leading-[16px] text-white'>{item.time}</p>
                                    <p className='font-[500] text-[16px] leading-[16px] text-white'>{item.type}</p>
                            </div>
                        <div className='-[#2D2D2D]'>
                            <div className='flex items-center gap-[50px]'>
                                <div className='flex items-center gap-[5px]'>
                                    <p className='font-[500] text-[16px] leading-[16px] text-white'>{item.category}</p>
                                    <RiVipCrown2Fill className='text-redText'/>
                                </div>
                                <p className='font-[500] text-[16px] leading-[16px] text-white'>{item.price}</p>
                            </div>
                        </div>
                    </li>
                  ))
                }
            </ul>
          </div>
        ) : (
          <div className="w-full min-h-screen  mb-[30px]">
            <div className=" container relative">
              <img
                src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
                className="w-full mx-auto rounded-lg "
                alt=""
              />
              <div className="text-white absolute top-[480px] left-0 right-0 ">
                <h2 className="font-[500] text-[42px] leading-[40px] text-center mb-[22px]">{data?.title}</h2>
                <div className='flex items-center gap-[20px] justify-center'>
                    <p className='font-[400] text-[16px] leading-[16px]'>{data?.release_date}</p>
                    <p className='font-[400] text-[16px] leading-[16px] uppercase'>{data?.original_language}</p>
                    {data?.genres?.slice(0,1).map(item => (
                        <p className='font-[400] text-[16px] leading-[16px]' key={item.id}>{item.name}</p>
                    ))}
                    <div className='flex items-center gap-[8px]'>
                        <FaStar className='text-yellow-400'/>
                        <p className='font-[400] text-[16px] leading-[16px]'>{data?.vote_average}</p>
                    </div>
                </div>
                <button className='flex justify-center mt-[20px] w-[300px] py-[5px] rounded-lg text-redText bg-white mx-auto'>
                    Купить билет
                </button>
              </div>
            </div>
            <div className='w-[380px] mx-auto mt-[30px]'>
                <div className='flex items-center gap-[20px] mb-[48px]'>
                    <img src={detail1} alt="Detail Image" width={180} height={64} />
                    <img src={detail2} alt="Detail Image" width={180} height={64} />
                </div>
                <h2 className='font-[500] text-[20px] leading-[24px] text-white mb-[24px]'>Детали</h2>
                <ul className='mb-[20px]'>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Продолжительность</strong>
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText'>1ч 34м / 94 минут</span>
                    </li>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Премьера</strong>
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText'>{data?.release_date}</span>
                    </li>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Производство</strong>
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText'>{data?.origin_country}</span>
                    </li>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Жанр</strong>
                        {data?.genres?.slice(0,1).map(item => (
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText' key={item.id}>{item.name}</span>
                        ))}
                    </li>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Режиссер</strong>
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText'>Майк Митчелл, Стефани Стайн</span>
                    </li>
                    <li className='flex items-center justify-between mb-[16px]'>
                        <strong className='font-[500] text-[16px] leading-[20px] text-greyText'>Возрастной рейтинг</strong>
                        <span className='font-[500] text-[16px] leading-[20px] text-greyText'>16+</span>
                    </li>
                </ul>
                <hr />
                <h2 className='font-[500] text-[20px] leading-[24px] text-white mb-[24px] mt-[32px]'>Сюжет</h2>
                <p className='font-[500] text-[16px] leading-[20px] text-greyText'>{data?.overview}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
