import React from "react";

const commentsData = [
  {
    name: "Shivshankar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    reply: [
      {
        name: "Shivshankar",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        reply: [
          {
            name: "Shivshankar",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivshankar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    reply: [
      {
        name: "Shivshankar",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        reply: [
          {
            name: "Shivshankar",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivshankar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    reply: [
      {
        name: "Shivshankar",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        reply: [
          {
            name: "Shivshankar",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivshankar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    reply: [
      {
        name: "Shivshankar",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        reply: [
          {
            name: "Shivshankar",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            reply: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex mt-2 bg-gray-200">
      <img
        className="h-10 w-10"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <button onClick={CommentList}></button>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};
const Comments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {commentsData.map((c, index) => (
        <CommentList key={index} comments={commentsData} />
      ))}
    </div>
  );
};

export default Comments;
