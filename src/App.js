import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import giphy from "./apis/giphy";
import Card from "./components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const api_key = "api_key=FNG6cMpnUHAyKl0xbUXFIauyh57vPwBB";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const handleUpdate = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e, term) => {
    e.preventDefault();

    giphy
      .get(`search?q=${term}&` + api_key)
      .then(response => setGifs(response.data.data));
  };
  useEffect(() => {
    giphy
      .get("trending?" + api_key)
      .then(response => setGifs(response.data.data));
  }, []);
  return (
    <div className="ui container">
      <Header
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Wrapper>
        {gifs.map(gif => (
          <Card key={gif.id} gif={gif} />
        ))}
      </Wrapper>
    </div>
  );
};

export default App;
