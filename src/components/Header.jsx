import { RxHamburgerMenu } from 'react-icons/rx';
import { youtubeLogo } from '../utils/constants';
import { FaPlus } from 'react-icons/fa6';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleSideBar = (e) => {
    e.preventDefault();
    dispatch(toggleSideBar());
  };

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
      <div className="flex items-center flex-grow max-w-md mx-auto w-full">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-slate-300 rounded-l-full px-4 py-2 text-sm sm:text-base focus:outline-none"
        />
        <div className="border border-slate-300 border-l-0 bg-slate-100 rounded-r-full px-4 flex items-center justify-center h-10 cursor-pointer">
          <CiSearch className="text-xl text-gray-600" />
        </div>
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
