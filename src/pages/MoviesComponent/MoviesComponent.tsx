import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopNavigationBar from '../../components/TopNavigationBar';

import PlaceHolderImage from '../../../public/assets/images/img_placeholder.png';


type Movies = {
    title: string;
    'total-content-items': string;
    'page-num-requested': string;
    'page-size-requested': string;
    'page-size-returned': string;
    'content-items': ContentItems;
};

type ContentItems = {
    content: Array<Content>;
};

type Content = {
    name: string;
    'poster-image': string;
};

const moviesUrl = (pageNumber: number) =>
    `https://github.com/abhishekkunnath/react-movies-list/blob/master/page${pageNumber}.json`;

const MoviesComponent = () => {
    const [moviesData, setMoviesData] = useState<Movies>(null);

    const fetchMovies = (pageNumber: number) => {
        debugger;
        fetch(moviesUrl(pageNumber))
            .then((response) => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.log(jsonData);
                setMoviesData(jsonData.page);
            })
            .catch((error) => {
                // handle your errors here
                console.error(error);
            });
    };

    useEffect(() => {
        fetchMovies(1);
    }, []);

    return (
        <div className="h-full min-h-screen bg-black">
            <TopNavigationBar />
            {moviesData && (
                <InfiniteScroll
                    dataLength={54}
                    next={() => {}}
                    hasMore={true}
                    loader={null}
                    className="grid grid-cols-3 px-2"
                >
                    {moviesData['content-items'].content.map((movie, index) => (
                        <div
                            key={index}
                            className="mx-2 mb-8 font-titillium text-gray-50"
                        >
                            <img
                                src={
                                    `../../../public/assets/images/${movie['poster-image']}` ||
                                    PlaceHolderImage
                                }
                                alt={movie.name}
                                className="block mb-1"
                            />
                            <span>{movie.name}</span>
                        </div>
                    ))}
                </InfiniteScroll>
            )}
        </div>
    );
};

export default MoviesComponent;
