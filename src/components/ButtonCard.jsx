const ButtonCard = ({ data }) => {
    return (
        <div className="border-2 border-slate-300 rounded-4xl py-2 px-4 hover:cursor-pointer overflow-y-auto 
                        text-sm sm:text-base md:text-lg 
                        max-w-full sm:max-w-xs md:max-w-sm 
                        transition duration-200 hover:shadow-md">
            <p className="truncate">{data}</p>
        </div>
    );
};

export default ButtonCard;

