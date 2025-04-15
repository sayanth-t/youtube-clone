import { useEffect, useState } from 'react';
import LiveChatMessage from './LiveChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateMessage, generateRandomName } from '../utils/helper';
import { profileImg } from '../utils/constants';

function LiveChat() {
  const dispatch = useDispatch();
  const [sendMessage,setSendMessage] = useState("")
  const messages = useSelector((state) => state.chat.messages );

  const handleSendMessage = (e) => {
    e.preventDefault()
    dispatch(addMessage({
      name : "user",
      text : sendMessage ,
      profile : "https://yt4.ggpht.com/ytc/AIdro_nfVdMJxvspCjDDnQTBEe6GsFGPNQVObW5s6bXEziWzkZI=s32-c-k-c0x00ffffff-no-rj"
    }))
    setSendMessage("")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Fetching Dataaa...!!!');
      dispatch(
        addMessage({
          user: generateRandomName(),
          text: generateMessage(7),
          profile:
            'https://yt4.ggpht.com/YzxXAgFgbT9ZwOKlaxa6jlEoOftWdcBVOmQydlVjjrUNlJzJ34pzzGrTa2JZImc5C0PQjhrP9g=s32-c-k-c0x00ffffff-no-rj',
        })
        
      );
   
    },  500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[500px] max-h-screen rounded-2xl border border-gray-500 w-full sm:w-[400px] bg-white mt-16">
      <div className="p-3 border-b text-lg font-semibold ">Live Chat</div>

      <div className="flex-1 flex flex-col-reverse gap-1 overflow-y-auto  p-3 space-y-2 bg-white">
        {messages.map((msg, index) => (
          <LiveChatMessage key={index} message={msg} />
        ))}
      </div>

      <div >
        <form onSubmit={handleSendMessage} className="p-3 border-t flex items-center">
          <input
            type="text"
            value={sendMessage}
            onChange={(e)=> setSendMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <button onClick={handleSendMessage} className="ml-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-xl hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default LiveChat;
