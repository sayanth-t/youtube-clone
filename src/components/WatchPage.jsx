import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/appSlice';
import { useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';import axios from 'axios';
import { API_KEY, YT_BASE_URL } from '../utils/constants';
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';
;

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo,setVideoInfo] = useState("");
  const [isLive] = useState(true)
  const dispatch = useDispatch();
  const hideSideBar = () => {
    dispatch(closeSideBar());
  };

  const videoId = searchParams.get('v');

  const getVideoInfo = async () => {
    try {
      const res = await axios.get(YT_BASE_URL+"id="+videoId+"&key="+API_KEY) ;
      setVideoInfo(res?.data?.items[0]?.snippet)
    } catch (err) {
      console.log(err.message)
    }
  }

  const { channelTitle , description , title }= videoInfo ;
  
  useEffect(() => {
    hideSideBar();
    getVideoInfo() ;
  }, []);

  return (
    <div className="flex flex-col lg:flex-row p-4 px-20 gap-6">

    {/* Video Info */}
    <div className="flex-1">
      <div className="w-full aspect-video mb-4">
        <iframe
          width="1200"
          height="700"
          className="rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
  
      <div>
        {/* Video Title and Stats */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">1.2M views • 2 days ago</p>
  
        {/* Like/Dislike and Share Section */}
        <div className="flex items-center gap-4 mt-4 mb-4">
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
            👍 12K
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
            👎
          </button>
          <button className="text-sm text-blue-600 hover:underline">Share</button>
        </div>
  
        {/* Video Description */}
        <p className="text-gray-800 mb-6">
          {description}
        </p>
  
        {/* Channel Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://via.placeholder.com/48" // Replace with real channel image
            alt="Channel Logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900">{channelTitle}</p>
            <p className="text-sm text-gray-500">1.2M subscribers</p>
          </div>
          <button className="ml-auto bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
  
        {/* Comments Section */}
        <CommentSection/>

      </div>
    </div>
  
    {/* Sidebar for Suggested Videos (optional) */}
    <div className="w-full lg:w-[400px]">
      {
        isLive ? <div>
          <LiveChat/>
        </div> : <div className="space-y-4">
        <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />
        {/* Replace with actual suggested videos */}
      </div>
      }
    </div>
  </div>
  
  );
};

export default WatchPage;
