import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SearchFeild = () => {
  const [searchName, setSearchName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (searchName.trim() === "") {
      // If search term is empty, clear suggestions
      setSuggestions([]);
      return;
    }

    axios
      .get(`http://localhost:3001/charteredAccountants?name_like=${searchName}`)
      .then((response) => {
        setSuggestions(response.data.map((accountant) => accountant.name));
      })
      .catch((error) => console.error("Error:", error));
  }, [searchName]);

  const handleSearch = (e, response) => {
    e.preventDefault();
    setRedirect(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchName(suggestion);
    setSuggestions([]); // Clear suggestions after click
    shouldDisplaySuggestions = false;
  };

  if (redirect) {
    return <Navigate to={`details/${searchName}`} />;
  }

  let shouldDisplaySuggestions = searchName.trim() !== "";

  return (
    <div className="mt-6 lg:mt-10 w-full">
      <div className="relative rounded-md shadow-sm">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
            className="block w-full h-12 lg:h-16 rounded-md border-0 py-1.5 pl-5 lg:pl-7 pr-14 lg:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fs-search-primary sm:text-sm sm:leading-6"
            placeholder="Search by name"
          />
          {shouldDisplaySuggestions && (
            <ul className="absolute z-10 bg-white border border-fs-search-primary rounded-md w-full mt-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="py-2 px-3 hover:bg-blue-100 hover:bg-opacity-75 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              className="bg-fs-search-primary px-8 lg:px-14 py-2 lg:py-3 rounded-lg h-12 lg:h-16 text-fs-search-button-text text-sm lg:text-base"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFeild;
