import { comments } from "../utils/constants";
import CommentCard from "./CommentCard";


const CommentSection = () => {

  const CommentList = ({ comments }) => {

    return ( comments.map((comment,index)=> (
       <div>
          <CommentCard key={index} data={comment}/>
          <div className='ml-5 border-l-2 border-slate-200'>
            <CommentList comments={comment.replies}/>
          </div>
          
       </div>
    )) )

  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      {/* Comment Input */}
      <div className="flex items-start gap-3 mb-6">
        <img
          src="https://via.placeholder.com/40" // User profile picture
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          placeholder="Add a comment..."
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 resize-none p-2"
          rows="2"
        ></textarea>
      </div>

      {/* Placeholder Comments */}
      <div className="space-y-4">
        <CommentList comments={comments}/>
      </div>
    </div>
  );
};

export default CommentSection;
