import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopNavigationBar from '../../components/TopNavigationBar';

import PlaceHolderImage from '../../../public/assets/images/img_placeholder.png';

const moviesData = [
    {
      "name": "The Birds",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster1.jpg"
    },
            {
      "name": "The Birds",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "Rear Window",
      "poster-image": "poster3.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster2.jpg"
    },
    {
      "name": "Family Pot",
      "poster-image": "poster1.jpg"
    },
    {
      "name": "The Birds",
      "poster-image": "poster1.jpg"
    }
  ];

const MoviesComponent = () => {
    return (
        <div className="h-full min-h-screen bg-black">
            <TopNavigationBar />
            <InfiniteScroll
                dataLength={54}
                next={() => {}}
                hasMore={true}
                loader={null}
                className="grid grid-cols-3 px-2"
            >
                {moviesData.map((movie, index) => (
                    <div key={index} className="mx-2 mb-8 font-titillium text-gray-50">
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
        </div>
    );
};

export default MoviesComponent;
