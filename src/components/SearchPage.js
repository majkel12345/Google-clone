import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../UseGoogleSearch";
import Response from "../Response";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //   const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
