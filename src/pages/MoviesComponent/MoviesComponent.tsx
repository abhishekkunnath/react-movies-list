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
    `https://abhishekkunnath.github.io/react-movies-list/page${pageNumber}.json`;

const MoviesComponent = () => {
    const [moviesData, setMoviesData] = useState<Movies>(null);
    const [pageNo, setPageNo] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const fetchMovies = (pageNumber: number) => {
        fetch(moviesUrl(pageNumber))
            .then((response) => response.json())
            .then((jsonData) => {
                if (!moviesData) {
                    setMoviesData(jsonData.page);
                } else {
                    let moviesList = moviesData;
                    let newItems = jsonData.page['content-items'].content;
                    moviesList['content-items'].content.push(...newItems);
                    setMoviesData(moviesList);
                }
                setPageNo(pageNumber);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (
            moviesData &&
            moviesData['content-items'].content.length ===
                parseInt(moviesData['total-content-items'])
        ) {
            setHasMore(false);
        }
    }, [moviesData]);

    useEffect(() => {
        fetchMovies(pageNo);
    }, []);

    const buildImage = (image: string) => {
        try {
            require(`../../../public/assets/images/${image}`);
            return `../../../public/assets/images/${image}`;
        } catch (e) {
            return PlaceHolderImage;
        }
    };

    return (
        <div className="h-full min-h-screen bg-black">
            <TopNavigationBar
                onSearch={(searchQuery: string) => setSearchQuery(searchQuery)}
            />
            {moviesData && (
                <InfiniteScroll
                    dataLength={
                        parseInt(moviesData['total-content-items']) -
                        moviesData['content-items'].content.length
                    }
                    next={() => fetchMovies(pageNo + 1)}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    className="grid grid-cols-3 px-2"
                >
                    {moviesData['content-items'].content
                        .filter((movie) => {
                            if (searchQuery === '') {
                                return movie;
                            } else if (
                                movie.name.toLowerCase().includes(searchQuery)
                            ) {
                                return movie;
                            }
                        })
                        .map((movie, index) => (
                            <div
                                key={index}
                                className="mx-2 mb-8 font-titillium text-gray-50"
                            >
                                <img
                                    src={buildImage(movie['poster-image'])}
                                    alt={movie.name}
                                    className="block mb-1"
                                />
                                <span className="truncate block">
                                    {movie.name}
                                </span>
                            </div>
                        ))}
                </InfiniteScroll>
            )}
        </div>
    );
};

export default MoviesComponent;
