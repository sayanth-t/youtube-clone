function LiveChatMessage({ message }) {
  const { user, text , profile } = message;
  return (
    <div className="flex text-sm">
      <img width={25} height={25} src={profile} className="rounded-full" alt="User" />
      <span className="ml-2 font-medium text-gray-500">{user} </span>
      <span className="ml-2 text-gray-900">{text}</span>
    </div>
  );
}

export default LiveChatMessage;
