import React from "react";

import randomWords from "random-words";

const Header = ({ handleUpdate, handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="ui divider" />
      <div className="ui menu ">
        <button
          onClick={e => {
            setSearchTerm(randomWords());
            handleSubmit(e, searchTerm);
          }}
          className="ui primary button">
          Suprise me!
        </button>
        <div className="ui menu right" />
        <form
          className="ui icon input"
          style={{ width: "75%" }}
          onSubmit={e => handleSubmit(e, searchTerm)}>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => handleUpdate(e)}
          />
          <i className="search icon" />
        </form>
      </div>
    </>
  );
};

export default Header;
