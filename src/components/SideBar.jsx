import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary, MdWatchLater, MdThumbUp, MdOutlinePlaylistPlay } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="flex flex-col w-48 items-center h-screen mt-20 ">
            {/* home , short ,subscriptions short links */}
            <div >
                <ul className="space-y-2">
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdHomeFilled className="text-xl" />
                            Home
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <FaFire className="text-xl" />
                            Shorts
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdSubscriptions className="text-xl" />
                            Subscriptions
                        </li>
                </ul>
            </div>

            <hr className="my-2" />

            {/* you */}
            <div className="py-5">
                    <ul className="space-y-2">
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            You
                            <MdOutlineKeyboardArrowRight />
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdOutlinePlaylistPlay className="text-xl" />
                            Playlists
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdOutlineVideoLibrary className="text-xl" />
                            Your Videos
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdSubscriptions className="text-xl" />
                            Your Courses
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdWatchLater className="text-xl" />
                            Watch Later
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <MdThumbUp className="text-xl" />
                            Liked Videos
                        </li>
                    </ul>
            </div>

            <hr className="my-2" />

            {/* Subscriptions */}
            <div className="py-5">
                <h2 className="mb-2 text-gray-600 font-semibold px-2">Subscriptions</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <img  alt="Karikku" className="w-6 h-6 rounded-full" />
                            Karikku
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <img  alt="Mr Beast" className="w-6 h-6 rounded-full" />
                            Mr Beast
                        </li>
                        <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <img  alt="YouTube India" className="w-6 h-6 rounded-full" />
                            YouTube India
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default SideBar;
