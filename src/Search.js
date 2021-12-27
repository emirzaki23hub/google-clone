import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("aaaaa", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate("/searchpage");
  };
   
  
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search{" "}
          </Button>
          <Button variant="outlined">I'am Feeling Lucky </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttonsHidder" type="submit" onClick={search} variant="outlined">
            Google Search{" "}
          </Button>
          <Button  className="search__buttonsHidder" variant="outlined">I'am Feeling Lucky </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
