const CommentSection = () => {
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
        <div>
          <p className="text-sm font-semibold">User One</p>
          <p className="text-sm text-gray-700">Awesome video! 🔥</p>
        </div>
        <div>
          <p className="text-sm font-semibold">User Two</p>
          <p className="text-sm text-gray-700">Thanks for the info!</p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
