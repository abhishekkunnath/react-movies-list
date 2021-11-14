import classNames from 'classnames';
import React from 'react';
import BackIcon from '../../public/assets/icons/ic_back.png';
import SearchIcon from '../../public/assets/icons/ic_search.png';

const TopNavigationBar = () => {
    return (
        <div className="flex justify-between items-center sticky top-0 h-16 w-screen px-4 bg-gradient-to-b from-black">
            <div className="flex whitespace-nowrap items-center">
                <img className="h-6 w-6" src={BackIcon} alt="Back" />
                <span className="pl-4 font-titillium text-gray-50">Romantic Comedy</span>
            </div>
            <img className="h-6 w-6" src={SearchIcon} alt="Search" />
        </div>
    );
};

export default TopNavigationBar;
