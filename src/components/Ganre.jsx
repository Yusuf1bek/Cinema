import React, { useEffect, useState } from 'react';
import { useGetMovieDiscoverQuery } from '../redux/api/movie-api';
import { useGetGenreQuery } from '../redux/api/genre-api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Discover = () => {
    const {t} = useTranslation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedGenre, setSelectedGenre] = useState(
        searchParams.get("genre") 
            ? searchParams.get("genre").split("-").map(Number) 
            : []
    );
    const [page, setPage] = useState(+searchParams.get("count") || 1);
    const { data: genres, isLoading: isGenresLoading } = useGetGenreQuery();
    const { data, isLoading: isMoviesLoading, isError } = useGetMovieDiscoverQuery({
        with_genres: selectedGenre.join(","),
        page,
        without_genres: "10749,18",
    });
    const handleChangeGenre = (id) => {
        const params = new URLSearchParams(searchParams);

        if (selectedGenre.includes(id)) {
            const updatedGenres = selectedGenre.filter((i) => i !== id);
            setSelectedGenre(updatedGenres);
            params.set("genre", updatedGenres.join("-"));
        } else {
            const updatedGenres = [...selectedGenre, id];
            setSelectedGenre(updatedGenres);
            params.set("genre", updatedGenres.join("-"));
        }

        params.set("count", 1);
        setSearchParams(params);
        setPage(1);
    };

    const handleChange = (event, value) => {
        setPage(value);
        const params = new URLSearchParams(searchParams);
        params.set("count", value);
        setSearchParams(params);
    };

    if (isGenresLoading || isMoviesLoading) {
        return (
            <div className="flex flex-row gap-6 justify-center items-center my-[200px]">
                <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce"></div>
                <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        );
    }

    return (
        <div className="container my-[30px]">
            <h2 className="font-[500] text-[32px] leading-[54px] text-white">{t("geners")}</h2>
            <div className="flex gap-5 overflow-auto p-3 ganre">
                {genres?.genres?.map((genre) => (
                    <button
                        onClick={() => handleChangeGenre(genre.id)}
                        className={`whitespace-nowrap rounded-md px-2 bg-black text-redText ${
                            selectedGenre.includes(genre.id) ? "bg-red-500 text-white" : ""
                        }`}
                        key={genre.id}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
            <div className="flex items-center justify-center flex-wrap gap-[10px]">
                {data?.results?.map((movie) => (
                    <div className="w-[300px]" key={movie.id}>
                        <img
                            onClick={() => navigate(`/movie/${movie.id}`)}
                            src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                            className="w-full cursor-pointer"
                            alt={movie.title}
                        />
                        <h3 className="text-white mt-[5px]">{movie.title}</h3>
                        <p className="text-white">{movie.vote_average}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center my-[20px]'>
                <Pagination
                        count={data?.total_pages}
                        page={page}
                        onChange={handleChange}
                        className="bg-white rounded-xl w-[380px]"
                    />
            </div>
            {!data?.total_results && (
                <div>
                    <h2 className="text-center mt-11 text-white">Movie not found</h2>
                </div>
            )}
        </div>
    );
};

export default Discover;
