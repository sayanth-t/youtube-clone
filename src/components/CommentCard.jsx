import { profileImg } from '../utils/constants';

const CommentCard = ({ data }) => {
  const { name, comment } = data;
  return (
    <div>
      <div className="flex items-center">
        <div>
          <img width={50} src={profileImg} alt="User" />
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-gray-700">{comment}</p>
        </div>
      </div>
      
      
    </div>
  ); 
};

export default CommentCard;
