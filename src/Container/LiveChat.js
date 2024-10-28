import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, text, UserProfilePic } from "../utils/helper";

const LiveChat = () => {
  const [liveUserMessage, SetLiveUserMessage] = useState("");
  console.log(liveUserMessage);
  const dispatch = useDispatch();

  const liveMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("hello");
      dispatch(
        addMessage({
          name: generate(),
          message: text() + "🚀",
          user: UserProfilePic(),
        })
      );
    }, 1200);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 bg-slate-100 w-full h-[500px] border border-black overflow-y-scroll flex flex-col-reverse">
        <h1 className="text-xl font-bold text-center">Live chat:)</h1>
        {liveMessage.map((m, index) => (
          <ChatMessage
            key={index}
            name={m.name}
            maessage={m.message}
            user={m.user}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shivshankar",
              message: liveUserMessage + "🚀",
              user: "https://avatars.githubusercontent.com/u/104912148?s=400&u=ab315fdbdac3c5ac8cec980a0fff45c37d8c0de1&v=4",
            })
          );
        }}
        className="border border-black"
      >
        <input
          value={liveUserMessage}
          onChange={(e) => SetLiveUserMessage(e.target.value)}
          type="text"
          className="p-2 m-2 w-[75%] border border-black"
        ></input>
        <button className="bg-gray-200 p-3 ml-3 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
