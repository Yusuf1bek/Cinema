import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useGetMovieBySearchQuery } from '../redux/api/movie-api'
import { FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState("")
    const [search, setSearch] = useState("")
    const {data} = useGetMovieBySearchQuery({query: search}, {skip: !search})
    const navigate = useNavigate();
    useEffect(()=> {
      let q = searchParams.get("q")
      if(q){
        setSearchValue(q)
        setSearch(q)
      }
    }, [])
    const handleSearch = e => {
      e.preventDefault()
      setSearch(searchValue)
      setSearchParams({q: searchValue})
    }
  return (
    <div className='container'>
      <form action="" onSubmit={handleSearch} className='flex items-center justify-center gap-[50px] mb-[20px]'>
        <input className='bg-black text-white w-[375px] relative duration-300 border border-redText p-[12px] rounded-xl' type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <IoSearch className='text-redText text-lg absolute right-[640px]'/>
        <button className='bg-white text-redText p-[12px] rounded-xl w-[120px]'>Search</button>
      </form>
      <div className="flex items-center justify-center flex-wrap gap-[8px]">
                {data?.results?.map(movie => (
                    <div key={movie.id}>
                        <img
                            onClick={() => navigate(`/movie/${movie.id}`)}
                            src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                            width={300}
                            className="cursor-pointer"
                            alt={movie.title}
                        />
                        <h3 className="text-center text-white font-[500] text-[16px] leading-[20px] mb-[10px] mt-[10px]">
                            {movie.title}
                        </h3>
                        <div className="flex items-center gap-[8px] justify-center mb-[10px]">
                            <FaStar className='text-yellow-500' />
                            <p className="text-white font-[500] text-[16px] leading-[20px] mr-[20px]">
                                {movie.vote_average}
                            </p>
                            <p className="text-center text-white font-[500] text-[16px] leading-[20px]">
                                {movie.release_date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Search