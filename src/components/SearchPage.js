import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../UseGoogleSearch";
import Response from "../Response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "./Search";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //   const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="./">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
