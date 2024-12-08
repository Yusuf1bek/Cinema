import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetMovieBySearchQuery } from '../redux/api/movie-api';
import { FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const { data } = useGetMovieBySearchQuery({ query: search }, { skip: !search });
  const navigate = useNavigate();
  const {t} = useTranslation()
  useEffect(() => {
    let q = searchParams.get("q");
    if (q) {
      setSearchValue(q);
      setSearch(q);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchValue);
    setSearchParams({ q: searchValue });
  };

  return (
    <div
      className={`container ${
        data?.results?.length ? 'mb-8' : 'mb-20'
      } flex flex-col items-center`}
    >
      <form
        action=""
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <div className="relative flex items-center w-[400px]">
          <IoSearch className="absolute left-4 text-gray-400 text-xl" />
          <input
            className="w-full bg-gray-800 text-white placeholder-gray-500 pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-redText focus:border-transparent"
            type="text"
            placeholder={t("search.placeholder")}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-redText text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          {t("search.button")}
        </button>
      </form>

      {data?.results?.length ? (
        <div className="flex items-center justify-center flex-wrap gap-6">
          {data.results.map((movie) => (
            <div
              key={movie.id}
              className=" rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className="w-[300px] h-[450px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 text-center">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-white font-medium">{movie.vote_average}</span>
                  </div>
                  <span className="text--400 text-sm">{movie.release_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-12">{t("search.nomovie")}</p>
      )}
    </div>
  );
};

export default Search;
