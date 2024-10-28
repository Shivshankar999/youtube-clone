const ChatMessage = ({ name, maessage, user }) => {
  return (
    <div className="mt-2 p-1 flex ">
      <img className="h-7 w-7 rounded-xl" src={user} alt="user" />
      <div className="ml-2 flex items-center">
        <p className="font-bold">{name}</p>
        <p className="ml-2">{maessage}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
