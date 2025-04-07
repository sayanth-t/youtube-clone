import { useEffect, useState } from 'react';
import axios from 'axios';
import { YT_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { buttonMenus } from '../utils/constants';
import ButtonCard from './ButtonCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../utils/appSlice';

const VideoContainer = () => {

    const dispatch = useDispatch() ;
    const [ popularVideos , setPopularVideos ] = useState([]) ;


    const fetchVideos = async () =>{
        try {
          const videos = await axios.get(YT_VIDEOS_API) ;
          if(videos){
            setPopularVideos( videos?.data?.items ) ;
          } 
        } catch (err) {
          console.log(err.message)
        }
      }
      
      const toggleSideBar = () => {
        dispatch(openSideBar())
      }
    
      useEffect(()=>{
        toggleSideBar()
        fetchVideos() ;
      },[]) 

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            {/* button list */}
            <div className="flex gap-10 mb-6">
                {buttonMenus.map((buttonData, index) => (
                <div key={index}>
                    <ButtonCard data={buttonData} />
                </div>
                ))}
            </div>

            <div className='flex flex-row flex-wrap gap-5 '>
                {
                    popularVideos.map((video)=>(
                        <div  key={video.id}>
                          <Link to={"/watch?v="+video.id }>
                             <VideoCard videoInfo={video}/>
                          </Link>
                        </div> 
                    ))
                }
            </div>
        </div>
       
    );
}

export default VideoContainer;
