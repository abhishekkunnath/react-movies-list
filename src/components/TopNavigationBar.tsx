import classNames from 'classnames';
import React, { useState } from 'react';
import BackIcon from '../../public/assets/icons/ic_back.png';
import SearchIcon from '../../public/assets/icons/ic_search.png';
import CloseIcon from '../../public/assets/icons/ic_close.png';

const TopNavigationBar = ({ onSearch }: any) => {
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    return (
        <div className="flex justify-between items-center sticky top-0 h-16 px-4 bg-gradient-to-b from-black">
            <div className="flex whitespace-nowrap items-center">
                <img className="h-6 w-6 cursor-pointer" src={BackIcon} alt="Back" />
                {!searchBarVisible && (
                    <span className="pl-4 font-titillium text-gray-50">
                        Romantic Comedy
                    </span>
                )}
            </div>
            <div className="flex items-center">
                {!searchBarVisible ? (
                    <img
                        className="h-6 w-6 cursor-pointer"
                        src={SearchIcon}
                        alt="Search"
                        onClick={() => setSearchBarVisible(!searchBarVisible)}
                    />
                ) : (
                    <img
                        className="h-9 w-9 cursor-pointer"
                        src={CloseIcon}
                        alt="close"
                        onClick={() => {
                            setSearchBarVisible(!searchBarVisible);
                            onSearch('');
                        }}
                    />
                )}
                {searchBarVisible && (
                    <input
                        type="text"
                        placeholder="search . ."
                        className="h-6 m-2 p-1 w-full bg-transparent border-b-2 border-solid border-white text-white focus:outline-none"
                        onChange={(e) => onSearch(e.target.value)}
                        autoFocus
                    />
                )}
            </div>
        </div>
    );
};

export default TopNavigationBar;
