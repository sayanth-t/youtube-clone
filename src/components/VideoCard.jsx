
const VideoCard = ({videoInfo}) => {

    const { title , channelTitle ,thumbnails } = videoInfo.snippet ;
    const {viewCount} = videoInfo.statistics ;

    const thumbnail = thumbnails.maxres?.url 
               || videoInfo.thumbnails.high?.url 
               || videoInfo.thumbnails.medium?.url 
               || videoInfo.thumbnails.default?.url; 

    return (
        <div className="w-full sm:w-60 md:w-sm lg:w-sm flex flex-col gap-2 cursor-pointer">
            {/* Thumbnail */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Video Info */}
            <div className="flex flex-col gap-0.5 px-1">
                <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
                <p className="text-xs text-gray-500">{channelTitle}</p>
                <p className="text-xs text-gray-400">{viewCount} • {}</p>
            </div>
        </div>
    );
}

export default VideoCard;
