import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGUSSTION_API } from "../utils/containts";
// import { json } from "react-router-dom";
import { chacheResults } from "../utils/searchSlice";


const Head = () => {
  const [SearchQuery, SetSearchQuery] = useState("");
  const [suggesssion, SetSuggesstion] = useState([]);
  const [showSuggession, SetshowSuggession] = useState(false);

  const searchChche = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    // console.log(SearchQuery)

    const timer = setTimeout(() => {
      if (searchChche[SearchQuery]) {
        SetSuggesstion(searchChche[SearchQuery]);
      } else {
        SearchSuggesstion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery]);

  const SearchSuggesstion = async () => {
    const data = await fetch(YOUTUBE_SUGGUSSTION_API + SearchQuery);
    const json = await data.json();
    SetSuggesstion(json[1]);
    dispatch(
      chacheResults({
        [SearchQuery]: json[1],
      })
    );
    // console.log(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-5">
        <img
          onClick={() => toogleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS9EEOhmjbrqupspcZiT1URXVGR7EGcs6AQ&s"
          alt="hamburger"
        />
        <a href="/">
          <img
            className="h-8 mx-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRr1evh254UyxstZh2Lrt8RURcaPj6pZIAQ&s"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            value={SearchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
            onFocus={() => SetshowSuggession(true)}
            onBlur={() => SetshowSuggession(false)}
            type="text"
            className="border border-gray-400 rounded-l-full w-[600px] px-5 p-2"
          ></input>
          <button className="border border-gray-400 bg-gray-100 rounded-r-full px-5 py-2">
            🔍
          </button>
        </div>
        <div className="w-[37.5rem] px-5 py-2  bg-white shadow-lg rounded-l absolute">
          <ul>
            {showSuggession &&
              suggesssion.map((s) => (
                <li key={s} className="py-2  shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
