import React from "react";
// import ButtonList from "./ButtonList";
import Button from "./Button";
import VideoContainer from "./VideoContainer";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "News",
    "Live",
    "Entertainment",
    "Cortun",
    "Comedy",
    "Mixes",
    "Sports",
    "Recent",
    "Watched",
    "Horror",
    "Movie",
  ];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
