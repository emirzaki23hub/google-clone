import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import Response from "../reponse";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//key=AIzaSyA-qgA26RK_4Wrr-Lbbq9WYXowqezpa7lc
function SearchPage() {
  const [{ term = "elon" }] = useStateValue();

  //live api call
  const {data}= useGoogleSearch(term);
    

//     masking
// //   const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.co.id/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="img-link"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="all"> All </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="all"> News </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="all"> Images </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="all"> Shopping </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="all"> Maps </Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="all"> More </Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="all"> Settings </Link>
              </div>
              <div className="searchPage__option">
                <Link to="all"> Tools </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}{" "}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src } alt="Aa" />
              )}
               {item.displayLink} </a>
              <a href={item.link} className="searchPage__resultsTitle">
                {" "}
                <h2>{item.title}</h2>{" "}
              </a>
              <p className="searchPage__resultsSnippet">{item.snippet} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
