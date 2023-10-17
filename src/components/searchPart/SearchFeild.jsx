import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../../myconstant";

const SearchFeild = () => {
  const [inputValue, setInputValue] = useState(""); // store input value enter by user
  const [data, setData] = useState([]); // store data arrived from get request as OBJECT
  const [suggestions, setSuggestions] = useState([]); // store suggetions after filter the data
  const [redirect, setRedirect] = useState(false); // bool for redirect

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}`)  // get json data from json-server as OBJECT
      .then((response) => {
        const responseData = response.data.charteredAccountants;
        setData(responseData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearch = (e, response) => {
    e.preventDefault();
    setRedirect(true);   // When search - set redirect true
  };

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    // Filter the suggestions based on user input
    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(userInput.toLowerCase())
    );

    setSuggestions(filteredSuggestions); // set suggestions
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // set clicked value in textfeild
    setSuggestions([]); // Clear suggestions after click
    shouldDisplaySuggestions = false;
  };

  // Redirect to details page
  if (redirect) {
    return <Navigate to={`details/${inputValue}`} />;
  }

  let shouldDisplaySuggestions = inputValue !== ""; // For initialy suggestions false before start searching

  return (
    <div className="mt-6 lg:mt-10 w-full">
      <div className="relative rounded-md shadow-sm">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="block w-full h-12 lg:h-16 rounded-md border-0 py-1.5 pl-5 lg:pl-7 pr-14 lg:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fs-search-primary sm:text-sm sm:leading-6"
            placeholder="Search by name"
          />

          {/* Live Suggetions */}
          {shouldDisplaySuggestions && (
            <ul className="absolute z-10 bg-white border border-fs-search-primary rounded-md w-full mt-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.name)}
                  className="py-2 px-3 hover:bg-blue-100 hover:bg-opacity-75 cursor-pointer"
                >
                  {suggestion.name}
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
