import React, { useState } from "react"
import style from "./Searchbar.module.css"
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  }

  const searchField = {
    type: "text",
    name: "search",
    placeholder: "Search film",
    required: true,
    autoComplete:"off",
  }

  return (
    <header className={style.searchbar}>
      <form className={style.searchform} onSubmit={handleSubmit}>
        <input
          className={style.input}
          value={search}
          autoFocus
          onChange={handleChange}
          {...searchField} />   
        <button
          type="submit"
          className={style.button}
          onClick={handleSubmit}>Search
        </button>
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
   };