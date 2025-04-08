import { RxHamburgerMenu } from 'react-icons/rx';
import { youtubeLogo, YT_SEARCH_SUGGESTION_API } from '../utils/constants';
import { FaPlus } from 'react-icons/fa6';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GrClose } from "react-icons/gr";

const Header = () => {

  const [ searchQuery , setSearchQuery ] = useState("") ;
  const [ searchSuggestion , setsearchSuggestion ] = useState([]) ;

  const dispatch = useDispatch();

  const handleSideBar = (e) => {
    e.preventDefault();
    dispatch(toggleSideBar());
  };

  const getSuggestinos = async () => {
    try {
      const res = await axios.get(YT_SEARCH_SUGGESTION_API+searchQuery) ;
      setsearchSuggestion(res.data[1]) ;

    } catch (err) {
      console.log(err.message)
    }
  }

  const handleClickOutside = () => {
    try {
      setsearchSuggestion([]) ;
    } catch (err) {
      console.log(err.message) ;
    }
  }

  useEffect(()=>{
    const suggestinTimer = setTimeout(()=>getSuggestinos(),200) ;

    document.addEventListener("mousedown",handleClickOutside)
    
    return ()=> {
      clearTimeout(suggestinTimer) ;
    }
  },[searchQuery])

  return (
    <div className="w-full flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-10 py-3 gap-4 bg-white shadow-md mb-5">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div onClick={handleSideBar} className="cursor-pointer">
          <RxHamburgerMenu className="text-2xl sm:text-3xl" />
        </div>

        {/* Logo */}
        <img
          src={youtubeLogo}
          alt="YouTube"
          className="h-6 sm:h-8 md:h-10 object-contain hidden sm:block"
        />
      </div>

      {/* Middle Section */}
      <div className="relative flex items-center flex-grow max-w-md mx-auto w-full">
      <div className="relative w-full flex-grow max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-slate-300 rounded-l-full px-4 pr-10 py-2 text-sm sm:text-base focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Close Icon */}
          {searchQuery && (
            <GrClose
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-sm sm:text-base hover:text-black"
            />
          )}
        </div>


        <div className="border border-slate-300 border-l-0 bg-slate-100 rounded-r-full px-4 flex items-center justify-center h-10 cursor-pointer">
          <CiSearch className="text-xl text-gray-600" />
        </div>

        {/* Suggestions Dropdown */}
        { searchSuggestion.length !== 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-1 z-10">
            { searchSuggestion
                .map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </div>
                ))}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden sm:flex items-center gap-1 text-gray-500 hover:text-black cursor-pointer">
          <FaPlus className="text-xl" />
          <p className="text-sm sm:text-base">Create</p>
        </div>
        <IoIosNotificationsOutline className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
        <CgProfile className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
      </div>

    </div>
  );
};

export default Header;
